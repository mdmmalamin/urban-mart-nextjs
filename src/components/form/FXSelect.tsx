import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
  placeholder?: string;
  defaultSelectedKeys?: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const FXSelect = ({
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
      label={label}
      placeholder={placeholder}
      className="min-w-full sm:min-w-xs"
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      defaultSelectedKeys={defaultSelectedKeys}
      // errorMessage={errors[name] ? (errors[name].message as String) : ""}
      {...register(name)}
      onChange={onChange}
    >
      {options.map(({ key, label }) => (
        <SelectItem key={key}>{label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
