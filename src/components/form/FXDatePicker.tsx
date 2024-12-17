"use client";

import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

import { IInput } from "@/src/types";

interface IDatePicker extends IInput {}

const FXDatePicker = ({
  label,
  name,
  variant = "underlined",
  isRequired = false,
  defaultValue,
}: IDatePicker) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-xs"
          defaultValue={defaultValue}
          label={label}
          value={value}
          variant={variant}
          {...fields}
          isRequired={isRequired}
        />
      )}
    />
  );
};

export default FXDatePicker;
