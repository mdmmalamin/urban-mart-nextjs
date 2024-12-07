export interface IInput {
  type?: string;
  variant?: "underlined" | "flat" | "faded" | "bordered";
  size?: "md" | "lg" | "sm";
  required?: boolean;
  label?: string;
  name: string;
  isDisabled?: boolean;
}
