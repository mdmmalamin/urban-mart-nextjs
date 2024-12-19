"use client";

import CartSVG from "@/src/assets/icons/CartSVG";
import { Button } from "@nextui-org/button";
import ProductQuantityCounter from "./ProductQuantityCounter";
import { TInventoryProps } from "@/src/types";
import { useState } from "react";
import { useAddToCart } from "@/src/hooks/addToCart.hook";
import { useCurrentUser } from "@/src/context/user.provider";
import { usePathname, useRouter } from "next/navigation";
import DotLoadingSVG from "@/src/assets/icons/DotLoadingSVG";

const ProductAddToCart = ({
  inventory,
  productId,
}: {
  inventory: Partial<TInventoryProps>;
  productId: string;
}) => {
  const [cartQty, setCartQty] = useState(1);
  const { user } = useCurrentUser();

  const router = useRouter();
  const pathname = usePathname();

  const { mutate: handleAddToCart, isPending } = useAddToCart();

  const addToCart = () => {
    if (user) {
      handleAddToCart({ id: productId, quantity: cartQty });
    } else {
      router.push(`/login?redirect=${pathname}`);
    }
  };
  return (
    <div className="flex items-center gap-4">
      <ProductQuantityCounter
        quantity={cartQty}
        availableQuantity={inventory.availableQuantity!}
        setCartQty={setCartQty}
      />
      <Button
        className="flex-1"
        color="secondary"
        size="lg"
        isDisabled={isPending}
        onClick={() => addToCart()}
      >
        <CartSVG />
        {isPending ? (
          <>
            Add To Cart
            <DotLoadingSVG />
          </>
        ) : (
          "Add To Cart"
        )}
      </Button>
    </div>
  );
};

export default ProductAddToCart;
