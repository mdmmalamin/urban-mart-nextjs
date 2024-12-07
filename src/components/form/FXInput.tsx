"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

const FXInput = ({
  type = "text",
  variant = "underlined",
  size = "md",
  required = false,
  label = "label",
  name,
}: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      type={type}
      variant={variant}
      size={size}
      required={required}
      label={label}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      {...register(name)}
    />
  );
};

export default FXInput;
