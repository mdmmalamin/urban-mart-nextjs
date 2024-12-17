import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "../ui/Container";

const RecentProductSkeleton = () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Added Products</h2>
        <p className="text-center">
          Explore our newly added products, carefully curated to meet your
          needs. Each item is selected for its quality and uniqueness.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {[...Array(10)].map((_, idx) => (
          <Card key={idx} className="space-y-5 p-4 w-full h-[300px]">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentProductSkeleton;
