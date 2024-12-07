import Landing from "@/src/components/modules/home/Landing";
import RecentProduct from "@/src/components/modules/home/RecentProduct";
import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import ErrorBoundary from "@/src/components/ui/ErrorBoundary";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Landing />

      <ErrorBoundary fallback={<RecentPostSkeleton />}>
        <Suspense fallback={<RecentPostSkeleton />}>
          <RecentProduct />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
