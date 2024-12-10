import Container from "@/src/components/ui/Container";
import Landing from "./_components/Landing";
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
      <Landing />

      <FXErrorBoundary fallback={<RecentProductSkeleton />}>
        <Suspense fallback={<RecentProductSkeleton />}>
          <RecentProduct />
        </Suspense>
      </FXErrorBoundary>

      {/* <Container>
        <div className="grid grid-cols-4 gap-6">
          <div className="h-screen border">Filter</div>

          <div className="h-screen border col-span-3">Products</div>
        </div>
      </Container> */}
    </>
  );
}
