import ClaimCouponCode from "./ClaimCouponCode";

import BdtSVG from "@/src/assets/icons/BdtSVG";

type TOrderSummary = {
  totalItem: number;
  totalAmount: number;
};

const OrderSummary = ({ totalItem, totalAmount }: TOrderSummary) => {
  return (
    <div className="w-full lg:w-4/12 space-y-6 border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl">
      <div>
        <h3 className="text-lg font-semibold space-y-2">Order Summary</h3>
        <h5 className="flex items-center justify-between gap-2 text-default-500">
          Subtotal ({totalItem} items)
          <span className="flex items-center gap-2">
            <BdtSVG /> {totalAmount}
          </span>
        </h5>
      </div>

      <ClaimCouponCode />

      <h1 className="flex items-center justify-between gap-2">
        Total Amount:
        <span className="flex items-center gap-2">
          <BdtSVG /> {totalAmount}
        </span>
      </h1>
    </div>
  );
};

export default OrderSummary;
