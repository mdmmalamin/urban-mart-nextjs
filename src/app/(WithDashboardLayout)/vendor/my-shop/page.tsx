"use client";

import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import { Suspense } from "react";
import ShopBanner from "./_components/ShopBanner";
import InventoryContainer from "./_components/InventoryContainer";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { useGetMyShop } from "@/src/hooks/vendor.hook";

const ShopDashboard = async () => {
  const { data: myShop } = useGetMyShop();
  console.log("My Shop: ", myShop);
  return (
    <div className="max-w-5xl mx-auto">
      {myShop ? (
        <>
          <FXErrorBoundary fallback={<RecentPostSkeleton />}>
            <Suspense fallback={<RecentPostSkeleton />}>
              <ShopBanner />
            </Suspense>
          </FXErrorBoundary>

          <FXErrorBoundary fallback={<RecentPostSkeleton />}>
            <Suspense fallback={<RecentPostSkeleton />}>
              <InventoryContainer />
            </Suspense>
          </FXErrorBoundary>
        </>
      ) : (
        <></>
      )}

      <h1>Shop Dashboard </h1>
    </div>
  );
};

export default ShopDashboard;
