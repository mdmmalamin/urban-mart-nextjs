import { Suspense } from "react";

import RecentProduct from "./_components/RecentProduct";

import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import RecentProductSkeleton from "@/src/components/skeletons/RecentProductSkeleton";

export const metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <>
      {/* <Landing /> */}

      <FXErrorBoundary fallback={<RecentProductSkeleton />}>
        <Suspense fallback={<RecentProductSkeleton />}>
          <RecentProduct />
        </Suspense>
      </FXErrorBoundary>
    </>
  );
}
