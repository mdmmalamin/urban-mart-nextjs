import Post from "@/src/components/modules/foundItems/Post";
import Container from "@/src/components/ui/Container";
import { getPost } from "@/src/services/Post";

interface IProps {
  params: {
    itemId: string;
  };
}

const ItemDetailPage = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId);
  // console.log(post);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {/* <Post key={post?._id} post={post} /> */}
        abc
        
      </div>
    </Container>
  );
};

export default ItemDetailPage;
