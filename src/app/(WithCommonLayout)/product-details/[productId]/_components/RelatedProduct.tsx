import { TCategoryProps, TProductProps } from "@/src/types";
import { useGetAllProducts } from "@/src/hooks/product.hook";
import Container from "@/src/components/ui/Container";
import RecentProductCard from "@/src/components/cards/RecentProductCard";

const RelatedProduct = async ({ category }: { category: TCategoryProps }) => {
  const { data: products } = useGetAllProducts([
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

  // // console.log("Related Product:", products);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl font-bold">
          Related Products
        </h2>
        <p className="text-center max-w-xl mx-auto">
          Explore more options and find the perfect match for your needs!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
        {products?.data?.slice(0, 5)?.map((product: TProductProps) => (
          <>
            <RecentProductCard key={product.id} product={product} />
          </>
        ))}
      </div>
    </Container>
  );
};

export default RelatedProduct;
