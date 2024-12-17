"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react";

import BdtSVG from "@/src/assets/icons/BdtSVG";
import { SVGicons } from "@/src/assets/icons/SVGicons";
import FXPriceRange from "@/src/components/ui/FXPriceRange";
import { PriceRangeOptions } from "@/src/constant";
import { useProduct } from "@/src/context/product.provider";
import { useCategories } from "@/src/hooks/categories.hook";
import { TCategoryProps } from "@/src/types";

const FilterSidebar = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const { maxPrice, setQueryPriceRange } = useProduct();

  const { data: categories } = useCategories();

  return (
    <aside className="sticky z-20 text-nowrap">
      {/* //? Responsive Sidebar */}
      <div
        className={`${
          isFilterOpen
            ? "translate-x-0 -left-3 lg:left-0"
            : "-translate-x-full -left-3 lg:left-0 lg:translate-x-0"
        } absolute lg:block duration-300 min-w-72 w-full h-screen border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl space-y-6 transition-transform`}
      >
        {/* //? Toggle Button for small devices */}
        <Button
          isIconOnly
          className="lg:hidden fixed -right-10 top-5"
          radius="full"
          onClick={() => setFilterOpen(!isFilterOpen)}
        >
          <SVGicons
            className={`${isFilterOpen ? "" : "rotate-180"} duration-300 ease-soft-spring`}
          />
        </Button>

        {/* Filter Title */}
        <h1 className="text-lg font-semibold">Filter</h1>

        {/* Price Range Options */}
        <div className="space-y-3">
          <h3>Price</h3>
          <div>
            <FXPriceRange
              maxValue={maxPrice as number}
              onChangeEnd={(value) => setQueryPriceRange(value as number[])}
            />
          </div>

          <div className="space-y-3">
            {PriceRangeOptions?.map(({ min, max }, idx) => (
              <Link
                key={idx}
                className="block"
                href={`/all-products?minPrice=${min}&maxPrice=${max}`}
              >
                <Button
                  className="w-full flex items-center gap-2"
                  size="sm"
                  onClick={() => setQueryPriceRange([min, max])}
                >
                  {min === 0 ? (
                    <span>Under</span>
                  ) : (
                    <span className="flex items-center gap-0">
                      <BdtSVG />
                      {min}
                    </span>
                  )}
                  -
                  {PriceRangeOptions.length - 1 === idx ? (
                    <span>Above</span>
                  ) : (
                    <span className="flex items-center gap-0">
                      <BdtSVG />
                      {max}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Category Options */}
        <div className="space-y-3">
          <h3>Categories</h3>
          <div className="space-y-3">
            {categories?.data?.map(({ id, name, _count }: TCategoryProps) => (
              <Link
                key={id}
                className="w-full flex items-center justify-between gap-2 bg-default-50 hover:bg-default-100 duration-300 py-2 px-3 rounded-lg"
                href={`/all-products?category=${name}`}
              >
                {name}
                <span>{_count?.products}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
