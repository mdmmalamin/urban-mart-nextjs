import { Suspense } from "react";
import RecentProductSkeleton from "@/src/components/skeletons/RecentProductSkeleton";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import AllProductContainer from "./_components/AllProductContainer";
import FXSortBy from "@/src/components/ui/FXSortBy";

export const metadata = {
  title: "All Product",
  description: "",
};

const AllProductPage = async ({ searchParams }: { searchParams: any }) => {
  const queryObj = Object.entries(searchParams).map(([key, value]) => ({
    name: key.toString(),
    value: String(value),
  }));

  return (
    <>
      <FXSortBy params={searchParams} />

      <FXErrorBoundary fallback={<RecentProductSkeleton />}>
        <Suspense fallback={<RecentProductSkeleton />}>
          <AllProductContainer queryObj={queryObj} />
        </Suspense>
      </FXErrorBoundary>
    </>
  );
};

export default AllProductPage;
