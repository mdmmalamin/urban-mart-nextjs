import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import ShopAvatar from "./ShopAvatar";

import BdtSVG from "@/src/assets/icons/BdtSVG";
import CartSVG from "@/src/assets/icons/CartSVG";
import { TProductProps } from "@/src/types";
import Rating from "@/src/components/ui/Rating";

const ProductInfo = ({
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
        href={`/all-products/${category?.id}`}
      >
        {category?.name}
      </Link>

      <Button className="w-full" color="secondary" size="lg">
        <CartSVG /> Add To Cart
      </Button>

      <div>
        <Accordion variant="bordered">
          <AccordionItem key="1" aria-label="Description" title="Description">
            {description}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ProductInfo;
