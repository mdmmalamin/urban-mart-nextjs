"use client";

import { Button } from "@nextui-org/button";
import { Dispatch, SetStateAction } from "react";
type TQuantityCounter = {
  quantity: number;
  availableQuantity: number;
  setCartQty: Dispatch<SetStateAction<number>>;
};

const ProductQuantityCounter = ({
  quantity,
  availableQuantity,
  setCartQty,
}: TQuantityCounter) => {
  return (
    <div className="flex items-center gap-4 border border-default-400">
      <Button
        isIconOnly
        isDisabled={quantity === 1}
        radius="none"
        onClick={() => setCartQty(quantity - 1)}
      >
        -
      </Button>
      <span className="font-semibold w-8 flex items-center justify-center">{quantity}</span>
      <Button
        isIconOnly
        isDisabled={availableQuantity <= quantity}
        radius="none"
        onClick={() => setCartQty(quantity + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default ProductQuantityCounter;
