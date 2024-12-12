"use client";

import Container from "../../../../components/ui/Container";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { TProductProps } from "@/src/types";
import RecentProductCard from "../../../../components/cards/RecentProductCard";
import { useGetAllProducts } from "@/src/hooks/product.hook";
import { useProduct } from "@/src/context/product.provider";

const RecentProduct = () => {
  const { queryPriceRange } = useProduct();
  console.log(queryPriceRange);
  const { data: products } = useGetAllProducts([
    {
      name: "minPrice",
      value: queryPriceRange[0]?.toString(),
    },
    {
      name: "maxPrice",
      value: queryPriceRange[1]?.toString(),
    },
  ]);

  console.log(products);

  return (
    <Container>
      {/* //? Header */}
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl font-bold">
          Recently Added Products
        </h2>
        <p className="text-center max-w-lg mx-auto">
          Explore our newly added products, carefully curated to meet your
          needs. Each item is selected for its quality and uniqueness.
        </p>
      </div>

      {/* //? Body */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 my-8">
        {products?.data?.slice(0, 10)?.map((product: TProductProps) => (
          <>
            <RecentProductCard product={product} key={product.id} />
          </>
        ))}
      </div>

      {/* //? Footer */}
      <div className="flex justify-center">
        <Link href="/shop">
          <Button className="rounded-md bg-default-900 text-default" size="md">
            See All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default RecentProduct;
