import { ReactNode } from "react";

export interface IInput {
  type?: string;
  variant?: "underlined" | "flat" | "faded" | "bordered";
  size?: "md" | "lg" | "sm";
  label?: string;
  name: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  placeholder?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
}
