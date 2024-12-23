"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXModal from "@/src/components/ui/FXModal";
import { forgetPasswordValidationSchema } from "@/src/schemas";
import { useForgetPassword } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";

const ForgetPasswordModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const {
    mutate: handleForgetPassword,
    isPending,
    isSuccess,
  } = useForgetPassword();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleForgetPassword(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}

      <FXModal
        buttonClassName="text-sm text-default-500"
        buttonText="Forget Password?"
        title="Forgot your password?"
      >
        <span className="text-sm">
          Please enter the account for which you want to reset the password.
        </span>
        <FXForm
          resolver={zodResolver(forgetPasswordValidationSchema)}
          onSubmit={onSubmit}
          //! Only for development
          // defaultValues={{
          //   email: "vendortest01@gamil.com",
          // }}
        >
          <div className="space-y-3 mb-6">
            <FXInput
              isRequired
              label="Enter Your Email"
              name="email"
              type="email"
            />

            <Button className="w-full" size="md" type="submit">
              Send Verification
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </>
  );
};

export default ForgetPasswordModal;
