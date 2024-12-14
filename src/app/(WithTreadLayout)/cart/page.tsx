"use client";

import { useMyCarts } from "@/src/hooks/addToCart.hook";
import { TCartItemsProps } from "@/src/types/cart.type";
import OrderSummary from "./_components/OrderSummary";
import CartList from "./_components/CartList";

const CartPage = () => {
  const { data: myCarts } = useMyCarts();

  console.log(myCarts);
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
      <div className="w-full lg:w-8/12 space-y-4 border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl">
        {myCarts ? (
          myCarts?.data?.cartItems?.map(
            ({ product, quantity }: TCartItemsProps) => (
              <CartList
                productId={product.id}
                name={product.name}
                image={product.images?.[0]?.url}
                price={product.price}
                quantity={quantity}
                availableQuantity={product.inventory.availableQuantity}
                key={product.id}
              />
            )
          )
        ) : (
          <h1 className="h-32 text-center">no cart available</h1>
        )}
      </div>

      <OrderSummary
        totalItem={myCarts?.data?.totalItem}
        totalAmount={myCarts?.data?.totalAmount}
      />
    </div>
  );
};

export default CartPage;
