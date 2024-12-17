import Link from "next/link";

import CartSVG from "@/src/assets/icons/CartSVG";
import { useMyCarts } from "@/src/hooks/addToCart.hook";

const CartCount = () => {
  const { data } = useMyCarts();
  const value: number = data?.data?.cartItems?.length;

  let maxValue: number | string = value || "0";

  if (+maxValue > 99) {
    maxValue = "...";
  }

  return (
    <div>
      <div className="relative select-none">
        <Link
          className="text-xl"
          href={`/cart?${data?.data?.id || "no-cart-available"}`}
        >
          <CartSVG className="text-secondary-600" size="size-6" />
          <span
            className={`text-xs text-default-50 font-semibold bg-secondary-500 rounded-full leading-3 px-1.5 py-1 absolute -top-2 -right-2 ${
              maxValue !== 0 ? "block" : "hidden"
            }`}
          >
            {maxValue.toString()}
          </span>
        </Link>
      </div>
      {/* 
      <div className="ml-2 hidden md:block select-none">
        <div className="text-xs leading-4 font-semibold text-light text-nowrap">
          Cart Items
        </div>
        <div className="leading-4 text-base font-bold text-dark">₹57.00</div>
      </div> */}
    </div>
  );
};

export default CartCount;
