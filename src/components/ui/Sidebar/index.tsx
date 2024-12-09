"use client";

import { useUser } from "@/src/context/user.provider";
import Image from "next/image";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@nextui-org/button";
import { adminRoutes, profileRoutes } from "./constant";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";
import SidebarRoutesSkeleton from "../../skeletons/SidebarRoutesSkeleton";

const Sidebar = () => {
  const { user } = useUser();
  return (
    <div className="w-full space-y-6">
      <div className="relative rounded-lg overflow-hidden ring ring-default-300">
        {user ? (
          <Image
            alt={user?.fullName as string}
            src={user?.avatar as string}
            width={300}
            height={300}
            className="aspect-square w-full object-contain object-center bg-gradient-to-t to-default-50 from-transparent"
          />
        ) : (
          <Skeleton className="aspect-square w-full object-contain object-center bg-default-50" />
        )}

        <div className="bg-black/50 backdrop-blur-lg absolute bottom-0 w-full p-3">
          {user ? (
            <>
              <h3 className="text-lg font-semibold">{user?.fullName}</h3>
              <h5 className="text-sm font-medium">{user?.email}</h5>
            </>
          ) : (
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/5 rounded-lg mt-2" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
            </div>
          )}

          <Link href="/profile/create-post">
            <Button className="w-full mt-3" size="md" type="submit">
              Create a post
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg ring ring-default-300 bg-gradient-to-t to-default-100 from-transparent">
        {user ? (
          <SidebarOptions
            links={user?.role === "CUSTOMER" ? profileRoutes : adminRoutes}
          />
        ) : (
          <SidebarRoutesSkeleton />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
