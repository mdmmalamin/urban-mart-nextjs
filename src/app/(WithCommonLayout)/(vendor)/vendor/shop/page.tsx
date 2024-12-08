import InventoryContainer from "@/src/components/modules/vendor/shop/InventoryContainer";
import ShopBanner from "@/src/components/modules/vendor/shop/ShopBanner";
import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import ErrorBoundary from "@/src/components/ui/ErrorBoundary";
import { Suspense } from "react";

const ShopDashboard = async () => {
  return (
    <div>
      <ErrorBoundary fallback={<RecentPostSkeleton />}>
        <Suspense fallback={<RecentPostSkeleton />}>
          <ShopBanner />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<RecentPostSkeleton />}>
        <Suspense fallback={<RecentPostSkeleton />}>
          <InventoryContainer />
        </Suspense>
      </ErrorBoundary>

      <h1>Shop Dashboard </h1>
    </div>
  );
};

export default ShopDashboard;
