import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import { Suspense } from "react";
import ShopBanner from "./_components/ShopBanner";
import InventoryContainer from "./_components/InventoryContainer";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";

const ShopDashboard = async () => {
  return (
    <div>
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

      <h1>Shop Dashboard </h1>
    </div>
  );
};

export default ShopDashboard;
