import Link from "next/link";
import ShopAvatar from "./ShopAvatar";
import BdtSVG from "@/src/assets/icons/BdtSVG";
import { TProductProps } from "@/src/types";
import Rating from "@/src/components/ui/Rating";
import ProductDescription from "./ProductDescription";
import ProductAddToCart from "./ProductAddToCart";

const ProductInfo = ({
  id,
  inventory,
  name,
  price,
  category,
  description,
}: Partial<TProductProps>) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <ShopAvatar inventory={inventory!} />

        <span className="text-sm text-default-500">{inventory?.sku}</span>
      </div>

      <h1 className="text-2xl font-bold">{name}</h1>

      <div className="flex items-center gap-2">
        <Rating value={4} />
        <span className="text-xs text-default-500">44 reviews</span>
      </div>

      <div className="flex items-end gap-2 text-4xl font-bold py-2">
        <BdtSVG size="size-8" />
        {price}
      </div>

      <Link
        className="text-primary-500 capitalize"
        href={`/all-products?category=${category?.name}`}
      >
        {category?.name}
      </Link>

      <ProductAddToCart inventory={inventory!} productId={id!} />

      <ProductDescription description={description} />
    </>
  );
};

export default ProductInfo;
