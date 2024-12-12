"use client";

import ArrowSVG from "@/src/assets/icons/ArrowSVG";
import BdtSVG from "@/src/assets/icons/BdtSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXPriceRange from "@/src/components/ui/FXPriceRange";
import { useProduct } from "@/src/context/product.provider";
import { useCategories } from "@/src/hooks/categories.hook";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const FilterSidebar = () => {
  const [isFilterShow, setFilterShow] = useState(false);
  const { maxPrice, setQueryPriceRange } = useProduct();

  const { data: categories } = useCategories();
  // console.log(categories?.data);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
  };

  return (
    <div className="relative z-20 text-nowrap">
      <div
        className={`${isFilterShow ? "-translate-x-full -left-3" : ""} absolute duration-300 min-w-72 w-full h-screen border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl`}
      >
        <Button
          className="lg:hidden absolute -right-5 top-5"
          isIconOnly
          radius="full"
          onClick={() => setFilterShow(!isFilterShow)}
        >
          <ArrowSVG
            className={`${isFilterShow ? "" : "rotate-180"} duration-300 ease-soft-spring`}
          />
        </Button>

        <h1>Filter : {isFilterShow.toString()}</h1>

        <div>
          <h3>Price</h3>
          <div>
            <FXPriceRange
              maxValue={maxPrice as number}
              onChangeEnd={(value) => setQueryPriceRange(value as number[])}
            />
          </div>

          <FXForm
            onSubmit={onSubmit}
            // resolver={zodResolver(loginValidationSchema)}
            //! Only for development
            // defaultValues={{}}
          >
            <div className="space-y-3">
              <FXInput
                name="minPrice"
                placeholder="Min Price"
                startContent={<BdtSVG />}
              />
              <FXInput
                name="maxPrice"
                placeholder="Max Price"
                startContent={<BdtSVG />}
              />

              {/* <Button className="w-full" size="md" type="submit">
                Login
              </Button> */}
            </div>
          </FXForm>

          <div className="space-y-3">
            {fxPriceRange?.map(({ min, max }, idx) => (
              <Button className="w-full flex items-center gap-2" key={idx}>
                {min === 0 ? (
                  <span>Under</span>
                ) : (
                  <span className="flex items-center gap-0">
                    <BdtSVG />
                    {min}
                  </span>
                )}
                -
                {fxPriceRange.length - 1 === idx ? (
                  <span>Above</span>
                ) : (
                  <span className="flex items-center gap-0">
                    <BdtSVG />
                    {max}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div>{}</div>
      </div>
    </div>
  );
};

export default FilterSidebar;

//* Filtering functionalities (price range, category, keyword, etc.).

const fxPriceRange = [
  { min: 0, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 5000 },
  { min: 5000, max: 10000 },
  { min: 10000, max: 99999999 },
];
