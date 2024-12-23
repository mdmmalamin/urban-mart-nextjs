"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
  placeholder?: string;
}

const FXSelect = ({
  options,
  name,
  label,
  variant = "underlined",
  size = "md",
  placeholder,
  isDisabled = false,
  isRequired = false,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      className="min-w-full sm:min-w-xs"
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      isDisabled={isDisabled}
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      {...register(name)}
    >
      {options.map(({ key, label }) => (
        <SelectItem key={key}>{label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
