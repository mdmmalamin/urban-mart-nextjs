"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useForgetPassword } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import FXModal from "@/src/components/ui/FXModal";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";

const EditShopDetailsModal = () => {
  const {
    mutate: handleForgetPassword,
    isPending,
    isSuccess,
  } = useForgetPassword();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleForgetPassword(data);
  };

  return (
    <>
      {isPending && !isSuccess && <Loading />}

      <FXModal
        buttonClassName="text-sm text-default-500"
        buttonSize="sm"
        buttonText="Edit Details"
        title="Forgot your password?"
      >
        <span className="text-sm">
          Please enter the account for which you want to reset the password.
        </span>
        <FXForm
          onSubmit={onSubmit}
          // resolver={zodResolver(forgetPasswordValidationSchema)}
          //! Only for development
          // defaultValues={{
          //   name: "Leatherium Ltd.",
          // }}
        >
          <div className="space-y-3 mb-6">
            <FXInput
              isRequired
              label="Enter Your Shop Name"
              name="name"
              type="text"
            />

            <FXTextArea label="Description" name="description" />

            <Button className="w-full" size="md" type="submit">
              Update Shop Details
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </>
  );
};

export default EditShopDetailsModal;
