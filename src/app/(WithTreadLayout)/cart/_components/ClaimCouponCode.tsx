"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ClaimCouponCode = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <div className="flex items-center justify-between gap-4 text-default-500">
          <FXInput name="coupon" placeholder="Enter Coupon Code" />

          <Button className="" size="sm" type="submit">
            APPLY
          </Button>
        </div>
      </FXForm>
    </div>
  );
};

export default ClaimCouponCode;
