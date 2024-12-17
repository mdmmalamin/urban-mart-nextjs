"use client";

import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}

const FXTextArea = ({
  name,
  label,
  variant = "underlined",
  isRequired = false,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea
      className="bg-default-50"
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as String) : ""}
      isRequired={isRequired}
      label={label}
      minRows={6}
      variant={variant}
    />
  );
};

export default FXTextArea;
