"use client";

import { Skeleton } from "@nextui-org/skeleton";

const SidebarRoutesSkeleton = () => {
  return (
    <div className="w-full space-y-4 p-3">
      <Skeleton className="h-5 w-1/5 rounded-lg my-2" />
      <Skeleton className="h-5 w-3/5 rounded-lg my-2" />
      <Skeleton className="h-5 w-2/5 rounded-lg my-2" />
    </div>
  );
};

export default SidebarRoutesSkeleton;
