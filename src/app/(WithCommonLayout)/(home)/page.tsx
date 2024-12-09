import ErrorBoundary from "@/src/components/ui/ErrorBoundary";
import { Suspense } from "react";
import Landing from "./_components/Landing";
import RecentProduct from "./_components/RecentProduct";
import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";

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
