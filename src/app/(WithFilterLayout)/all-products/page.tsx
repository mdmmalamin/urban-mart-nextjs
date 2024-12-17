import { Suspense } from "react";

import RecentProductCard from "@/src/components/cards/RecentProductCard";
import RecentProductSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { getAllProducts } from "@/src/services/Products";
import { TProductProps } from "@/src/types";

export const metadata = {
  title: "All Product",
  description: "",
};

const AllProductPage = async ({ searchParams }: { searchParams: any }) => {
  const queryObj = Object.entries(searchParams).map(([key, value]) => ({
    name: key.toString(),
    value: String(value),
  }));
  const { data } = await getAllProducts(queryObj);

  return (
    <>
      <FXErrorBoundary fallback={<RecentProductSkeleton />}>
        <Suspense fallback={<RecentProductSkeleton />}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 my-8">
            {data?.map((product: TProductProps) => (
              <>
                <RecentProductCard key={product.id} product={product} />
              </>
            ))}
          </div>
        </Suspense>
      </FXErrorBoundary>
    </>
  );
};

export default AllProductPage;
