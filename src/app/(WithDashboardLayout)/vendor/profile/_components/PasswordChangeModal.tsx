"use client";

import { EditSVG } from "@/src/assets/icons/SVGicons";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXModal from "@/src/components/ui/FXModal";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PasswordChangeModal = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <FXModal
      buttonClassName="text-sm text-default-500"
      buttonText={<EditSVG />}
      isIconOnly
      title="Change Password"
    >
      <span className="text-sm">Please enter the new email address.</span>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <div className="space-y-3 mb-3">
          <FXInput name="oldPassword" label="Old Password" />

          <FXInput name="newPassword" label="Confirm New Password" />
          <FXInput name="confirmNewPassword" label="Confirm New Password" />

          <Button className="w-full" size="md" type="submit">
            SAVE CHANGE
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default PasswordChangeModal;
