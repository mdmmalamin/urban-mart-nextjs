interface IProps {
  params: {
    flashSaleId: string;
  };
}

export const metadata = {
  title: "Flash Sale",
  description: "",
};

const FlashProductDetailsPage = async ({ params: { flashSaleId } }: IProps) => {
  // const { data: post } = await getPost(itemId);
  // // // console.log(post);

  return (
    <>
      flash-sale/:id
      <div className="mx-auto my-3 max-w-[720px] border">
        <h3>{flashSaleId}</h3>
        {/* <Post key={post?._id} post={post} /> */}
        abc
      </div>
    </>
  );
};

export default FlashProductDetailsPage;
