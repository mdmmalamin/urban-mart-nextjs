import { TProductProps } from "@/src/types";
import RecentProductCard from "@/src/components/cards/RecentProductCard";
import { getAllProducts } from "@/src/services/Products";

const RecentProduct = async () => {
  const { data: products } = await getAllProducts([
    // {
    //   name: "minPrice",
    //   value: queryPriceRange[0]?.toString(),
    // },
    // {
    //   name: "maxPrice",
    //   value: queryPriceRange[1]?.toString(),
    // },
  ]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 my-8">
      {/* //? Body */}
      {products
        ?.slice(0, 10)
        ?.map((product: TProductProps) => (
          <RecentProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default RecentProduct;
