interface IProps {
  params: {
    flashSaleId: string;
  };
}

const FlashProductDetailsPage = async ({ params: { flashSaleId } }: IProps) => {
  // const { data: post } = await getPost(itemId);
  // console.log(post);

  return (
    <>
      flash-sale/:id
      <div className="mx-auto my-3 max-w-[720px] border">
        {/* <Post key={post?._id} post={post} /> */}
        abc
      </div>
    </>
  );
};

export default FlashProductDetailsPage;
