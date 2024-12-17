"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { UserInfoEditSVG } from "@/src/assets/icons/SVGicons";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import FXModal from "@/src/components/ui/FXModal";
import { useUpdateMyProfile } from "@/src/hooks/vendor.hook";
import { dateToString } from "@/src/utils";

const ProfileEditModal = ({ fullName, gender, dateOfBirth }: any) => {
  const { mutate: handleUpdateProfileInfo } = useUpdateMyProfile();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let userUpdatedData;

    if (data?.dateOfBirth) {
      userUpdatedData = {
        ...data,
        dateOfBirth: dateToString(data.dateOfBirth),
      };
    } else {
      userUpdatedData = {
        ...data,
      };
    }

    handleUpdateProfileInfo(userUpdatedData);
    // // console.log(data);
  };

  return (
    <FXModal
      buttonClassName="text-sm text-default-500"
      buttonText={<UserInfoEditSVG />}
      isDismissable={false}
      isIconOnly={true}
      title="Profile Edit"
    >
      <span className="text-sm">Please enter the account Information.</span>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <h3>{dateOfBirth}</h3>
        <div className="space-y-3 mb-3">
          <FXInput defaultValue={fullName} label="Full Name" name="fullName" />

          <FXSelect
            defaultSelectedKeys={[gender]}
            defaultValue={gender}
            label="Gender"
            name="gender"
            options={[
              { key: "MALE", label: "Male" },
              { key: "FEMALE", label: "Female" },
            ]}
            placeholder="Select your gender"
          />

          <FXDatePicker
            label="Date of Birth"
            name="dateOfBirth"
            // value={new Date("2024-12-01")}
            // defaultValue={new Date("2024-12-01")}
          />

          <Button className="w-full" size="md" type="submit">
            SAVE CHANGE
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default ProfileEditModal;
