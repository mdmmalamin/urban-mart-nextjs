"use client";

import { Skeleton } from "@nextui-org/skeleton";

import Rating from "../ui/Rating";

const ProductInfoSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 group">
          <Skeleton>
            <div className="rounded-full size-10" />
          </Skeleton>
          <Skeleton className="h-5 w-20" />
        </div>

        <Skeleton className="h-5 w-20" />
      </div>

      <Skeleton className="w-8/12 h-9" />

      <div className="flex items-center gap-2">
        <Rating value={0} />
        <Skeleton className="h-4 w-10">44 reviews</Skeleton>
      </div>

      <Skeleton className="h-10 w-1/2" />

      <Skeleton className="w-16 h-5" />

      <Skeleton className="w-full h-16" />

      <div>
        <Skeleton className="w-20 h-7" />
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;
