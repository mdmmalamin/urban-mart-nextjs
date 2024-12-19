import { Suspense } from "react";

import ProductInfo from "./_components/ProductInfo";
import RelatedProduct from "./_components/RelatedProduct";
import CustomerReview from "./_components/CustomerReview";
import ImageGallery from "./_components/ImageGallery";
import ProductInfoSkeleton from "@/src/components/skeletons/ProductInfoSkeleton";
import { linkToGetId } from "@/src/utils";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { getProductDetails } from "@/src/services/Products";
import RecentProductSkeleton from "@/src/components/skeletons/RecentProductSkeleton";
import Container from "@/src/components/ui/Container";

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = params;

  const { data: product } = await getProductDetails(linkToGetId(productId));
  const { id, name, description, price, images, category, inventory, stock } =
    product || {};

  console.log(product);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* //? Product Images Gallery */}
        <div className="col-span-1 rounded-lg p-2">
          <FXErrorBoundary fallback={<>Error...</>}>
            <Suspense fallback={<>Loading...</>}>
              <ImageGallery images={images} />
            </Suspense>
          </FXErrorBoundary>
        </div>

        {/* //? Product Details Information */}
        <div className="col-span-1 space-y-6 p-2">
          <FXErrorBoundary fallback={<ProductInfoSkeleton />}>
            <Suspense fallback={<ProductInfoSkeleton />}>
              <ProductInfo
                id={id}
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
      <Container>
        <div className="section-title my-8">
          <h2 className="mb-2 text-center text-2xl font-bold">
            Related Products
          </h2>
          <p className="text-center max-w-xl mx-auto">
            Explore more options and find the perfect match for your needs!
          </p>
        </div>
        <FXErrorBoundary fallback={<p>Related Products Error</p>}>
          <Suspense fallback={<RecentProductSkeleton />}>
            <RelatedProduct category={category} />
          </Suspense>
        </FXErrorBoundary>
      </Container>

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
