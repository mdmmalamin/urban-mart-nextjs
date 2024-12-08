import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Container from "@/src/components/ui/Container";
import { getProducts } from "@/src/services/RecentPosts";

const FoundPosts = async () => {
  const { data: posts } = await getProducts();
  // console.log(posts)
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Flash Sale</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {posts
          ?.slice(7, 9)
          ?.map((item: TPostProps) => (
            <RecentPostCard post={item} key={item._id} />
          ))} */}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default FoundPosts;
