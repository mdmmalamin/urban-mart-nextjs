"use client";

import ProductInfoSkeleton from "@/src/components/skeletons/ProductInfoSkeleton";
import RecentPostSkeleton from "@/src/components/skeletons/RecentPostSkeleton";
import ErrorBoundary from "@/src/components/ui/ErrorBoundary";
import { useGetProduct } from "@/src/hooks/product.hook";
import { Suspense } from "react";
import ProductInfo from "./_components/ProductInfo";
import RelatedProduct from "./_components/RelatedProduct";
import CustomerReview from "./_components/CustomerReview";
import ImageGallery from "./_components/ImageGallery";
import { linkToGetId } from "@/src/utils";

const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const { data } = useGetProduct(linkToGetId(productId));
  const { name, description, price, images, category, inventory, stock } =
    data?.data || [];
  // console.log("Product Details Page: ", data?.data);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* //? Product Images Gallery */}
        <div className="col-span-1 rounded-lg p-2">
          <ErrorBoundary fallback={<RecentPostSkeleton />}>
            <Suspense fallback={<RecentPostSkeleton />}>
              <ImageGallery images={images} />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* //? Product Details Information */}
        <div className="col-span-1 space-y-6 p-2">
          <ErrorBoundary fallback={<ProductInfoSkeleton />}>
            <Suspense fallback={<ProductInfoSkeleton />}>
              <ProductInfo
                inventory={inventory}
                name={name}
                price={price}
                category={category}
                description={description}
                stock={stock}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      {/* //? Related Products */}
      <ErrorBoundary fallback={<ProductInfoSkeleton />}>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <RelatedProduct category={category} />
        </Suspense>
      </ErrorBoundary>

      {/* //? Customer Reviews */}
      <ErrorBoundary fallback={<ProductInfoSkeleton />}>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <CustomerReview />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ProductDetailsPage;
