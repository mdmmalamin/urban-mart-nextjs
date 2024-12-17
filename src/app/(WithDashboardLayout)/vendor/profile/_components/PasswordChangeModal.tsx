"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { EditSVG } from "@/src/assets/icons/SVGicons";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXModal from "@/src/components/ui/FXModal";

const PasswordChangeModal = () => {
  const onSubmit: SubmitHandler<FieldValues> = () => {
    // console.log(data);
  };

  return (
    <FXModal
      isIconOnly
      buttonClassName="text-sm text-default-500"
      buttonText={<EditSVG />}
      title="Change Password"
    >
      <span className="text-sm">Please enter the new email address.</span>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <div className="space-y-3 mb-3">
          <FXInput label="Old Password" name="oldPassword" />

          <FXInput label="Confirm New Password" name="newPassword" />
          <FXInput label="Confirm New Password" name="confirmNewPassword" />

          <Button className="w-full" size="md" type="submit">
            SAVE CHANGE
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default PasswordChangeModal;
