import { Suspense } from "react";
import ShopPageContainer from "./_components/ShopPageContainer";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";

export const metadata = {
  title: "Shop",
  description: "",
};

const ShopPage = () => {
  return (
    <>
      <FXErrorBoundary
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
      </FXErrorBoundary>
    </>
  );
};

export default ShopPage;
