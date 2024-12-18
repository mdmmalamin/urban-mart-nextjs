import { Suspense } from "react";

import RecentProduct from "./_components/RecentProduct";

import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import RecentProductSkeleton from "@/src/components/skeletons/RecentProductSkeleton";
import Link from "next/link";
import Container from "@/src/components/ui/Container";

export const metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <>
      <Container>
        {/* //? Header */}
        <div className="section-title my-8">
          <h2 className="mb-2 text-center text-2xl font-bold">
            Recently Added Products
          </h2>
          <p className="text-center max-w-lg mx-auto">
            Explore our newly added products, carefully curated to meet your
            needs. Each item is selected for its quality and uniqueness.
          </p>
        </div>

        <FXErrorBoundary fallback={<RecentProductSkeleton />}>
          <Suspense fallback={<RecentProductSkeleton />}>
            <RecentProduct />
          </Suspense>
        </FXErrorBoundary>

        {/* //? Footer */}
        <div className="flex justify-center">
          <Link href="/all-products">
            <div className="rounded-md bg-default-900 hover:bg-default-700 duration-300 font-semibold text-default px-3 py-2">
              See All
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}
