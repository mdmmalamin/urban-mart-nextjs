"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { EditSVG } from "@/src/assets/icons/SVGicons";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXModal from "@/src/components/ui/FXModal";
import { useChangeEmail } from "@/src/hooks/auth.hook";

const EmailChangeModal = ({ email }: { email: string }) => {
  const { mutate: handleEmailChange } = useChangeEmail();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // // console.log(data);

    handleEmailChange(data);
  };

  return (
    <FXModal
      isIconOnly
      buttonClassName="text-sm text-default-500"
      buttonText={<EditSVG />}
      title="Change Email"
    >
      <span className="text-sm">Please enter the new email address.</span>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <div className="space-y-3 mb-3">
          <FXInput defaultValue={email} label="Email Address" name="email" />

          <Button className="w-full" size="md" type="submit">
            SAVE CHANGE
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default EmailChangeModal;
