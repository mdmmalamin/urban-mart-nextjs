"use client";

import { Suspense } from "react";

import ProductInfo from "./_components/ProductInfo";
import RelatedProduct from "./_components/RelatedProduct";
import CustomerReview from "./_components/CustomerReview";
import ImageGallery from "./_components/ImageGallery";

import { useGetProduct } from "@/src/hooks/product.hook";
import ProductInfoSkeleton from "@/src/components/skeletons/ProductInfoSkeleton";
import { linkToGetId } from "@/src/utils";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import RecentProductSkeleton from "@/src/components/skeletons/RecentProductSkeleton";

const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const { data } = useGetProduct(linkToGetId(productId));
  const { name, description, price, images, category, inventory, stock } =
    data?.data || [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* //? Product Images Gallery */}
        <div className="col-span-1 rounded-lg p-2">
          <FXErrorBoundary fallback={<RecentProductSkeleton />}>
            <Suspense fallback={<RecentProductSkeleton />}>
              <ImageGallery images={images} />
            </Suspense>
          </FXErrorBoundary>
        </div>

        {/* //? Product Details Information */}
        <div className="col-span-1 space-y-6 p-2">
          <FXErrorBoundary fallback={<ProductInfoSkeleton />}>
            <Suspense fallback={<ProductInfoSkeleton />}>
              <ProductInfo
                category={category}
                description={description}
                inventory={inventory}
                name={name}
                price={price}
                stock={stock}
              />
            </Suspense>
          </FXErrorBoundary>
        </div>
      </div>

      {/* //? Related Products */}
      <FXErrorBoundary fallback={<ProductInfoSkeleton />}>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <RelatedProduct category={category} />
        </Suspense>
      </FXErrorBoundary>

      {/* //? Customer Reviews */}
      <FXErrorBoundary fallback={<ProductInfoSkeleton />}>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <CustomerReview />
        </Suspense>
      </FXErrorBoundary>
    </>
  );
};

export default ProductDetailsPage;
