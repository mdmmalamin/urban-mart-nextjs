import RecentProductCard from "@/src/components/cards/RecentProductCard";
import { TQuery } from "@/src/services/Categories";
import { getAllProducts } from "@/src/services/Products";
import { TProductProps } from "@/src/types";

const AllProductContainer = async ({ queryObj }: { queryObj: TQuery[] }) => {
  const { data: products } = await getAllProducts(queryObj);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 my-6">
      {products?.map((product: TProductProps) => (
        <RecentProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProductContainer;
