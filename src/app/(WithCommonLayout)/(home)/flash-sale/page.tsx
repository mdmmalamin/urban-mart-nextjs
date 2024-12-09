import Post from "@/src/components/modules/foundItems/Post";
import Container from "@/src/components/ui/Container";
// import axiosInstance from "@/src/lib/AxiosInstance";
import { TProductProps } from "@/src/types";

const FoundItemsPage = async () => {
  // const { data: products } = await axiosInstance.get(`/products`);
  // console.log(products)

  return (
    <Container>
      Flash Sale
      {/* {products?.data?.map((product: TProductProps) => (
        <Post key={product.id} post={product} />
      ))} */}
    </Container>
  );
};

export default FoundItemsPage;
