"use client";

import OrderSummary from "./_components/OrderSummary";
import CartList from "./_components/CartList";

import { useMyCarts } from "@/src/hooks/addToCart.hook";
import { TCartItemsProps } from "@/src/types/cart.type";

const CartPage = () => {
  const { data: myCarts } = useMyCarts();

  // // console.log(myCarts);
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
      <div className="w-full lg:w-8/12 space-y-4 border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl">
        {myCarts ? (
          myCarts?.data?.cartItems?.map(
            ({ product, quantity }: TCartItemsProps) => (
              <CartList
                key={product.id}
                availableQuantity={product.inventory.availableQuantity}
                image={product.images?.[0]?.url}
                name={product.name}
                price={product.price}
                productId={product.id}
                quantity={quantity}
              />
            ),
          )
        ) : (
          <h1 className="h-32 text-center">no cart available</h1>
        )}
      </div>

      <OrderSummary
        totalAmount={myCarts?.data?.totalAmount}
        totalItem={myCarts?.data?.totalItem}
      />
    </div>
  );
};

export default CartPage;
