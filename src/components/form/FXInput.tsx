"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

const FXInput = ({
  type = "text",
  defaultValue,
  variant = "underlined",
  size = "md",
  isRequired = false,
  label = "",
  name,
  className,
  placeholder,
  startContent,
  endContent,
}: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      className={className}
      defaultValue={defaultValue}
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      isInvalid={!!errors[name]}
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      size={size}
      type={type}
      variant={variant}
      {...register(name)}
      endContent={endContent}
      startContent={startContent}
    />
  );
};

export default FXInput;
