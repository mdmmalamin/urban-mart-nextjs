"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

const FXInput = ({
  type = "text",
  variant = "underlined",
  size = "md",
  isRequired = false,
  label = "label",
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
      placeholder={placeholder}
      type={type}
      variant={variant}
      size={size}
      isRequired={isRequired}
      label={label}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      {...register(name)}
      startContent={startContent}
      endContent={endContent}
    />
  );
};

export default FXInput;
