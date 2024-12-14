import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { Suspense } from "react";
import RecentProduct from "./_components/RecentProduct";
import RecentProductSkeleton from "@/src/components/skeletons/RecentPostSkeleton";

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
