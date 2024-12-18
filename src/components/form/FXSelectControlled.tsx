"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
  placeholder?: string;
  defaultSelectedKeys?: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const FXSelectControlled = ({
  options,
  name,
  label,
  variant = "underlined",
  size = "md",
  placeholder = "placeholder",
  isDisabled = false,
  isRequired = false,
  defaultSelectedKeys,
  onChange,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      className="min-w-full sm:min-w-xs"
      defaultSelectedKeys={defaultSelectedKeys}
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      isDisabled={isDisabled}
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      {...register(name)}
      onChange={onChange}
    >
      {options.map(({ key, label }) => (
        <SelectItem key={key}>{label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelectControlled;
