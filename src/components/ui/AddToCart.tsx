"use client";

import CartSVG from "@/src/assets/icons/CartSVG";
import { useAddToCart } from "@/src/hooks/addToCart.hook";

const AddToCart = ({ id }: { id: string }) => {
  const { mutate: handleCart, isPending, isSuccess } = useAddToCart();

  return (
    <button
      className="p-1 rounded-lg bg-primary-400 shadow-lg hover:shadow-default-200 duration-300 absolute bottom-3 right-3"
      disabled={isPending && !isSuccess}
      onClick={() => handleCart({ id, quantity: 1 })}
    >
      <CartSVG size="size-5" />
    </button>
  );
};

export default AddToCart;
