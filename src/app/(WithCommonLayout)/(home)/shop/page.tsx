import ErrorBoundary from "@/src/components/ui/ErrorBoundary";
import { Suspense } from "react";
import ShopPageContainer from "./_components/ShopPageContainer";

const ShopPage = () => {
  return (
    <>
      <ErrorBoundary
        fallback={
          <p className="text-danger-500 h-96 w-full">Error Boundary...</p>
        }
      >
        <Suspense
          fallback={
            <p className="text-danger-500 h-96 w-full">Suspense Loading...</p>
          }
        >
          <ShopPageContainer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ShopPage;
