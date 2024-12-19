import { TCategoryProps, TProductProps } from "@/src/types";
import RecentProductCard from "@/src/components/cards/RecentProductCard";
import { getAllProducts } from "@/src/services/Products";

const RelatedProduct = async ({ category }: { category: TCategoryProps }) => {
  const { data: products } = await getAllProducts([
    {
      name: "category",
      value: category?.name,
    },
    {
      name: "page",
      value: "1",
    },
    {
      name: "limit",
      value: "5",
    },
  ]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
      {products
        ?.slice(0, 5)
        ?.map((product: TProductProps) => (
          <RecentProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default RelatedProduct;
