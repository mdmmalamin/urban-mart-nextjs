import { TProductProps } from "@/src/types";
import RecentProductCard from "@/src/components/cards/RecentProductCard";
import { getAllProducts } from "@/src/services/Products";

const RecentProduct = async () => {
  const products = await getAllProducts([
    {
      name: "page",
      value: "1",
    },
    {
      name: "limit",
      value: "10",
    },
  ]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 my-8">
      {products?.data?.map((product: TProductProps) => (
        <RecentProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RecentProduct;
