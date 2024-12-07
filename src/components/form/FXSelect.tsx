import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

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
  placeholder = "placeholder",
  isDisabled = false,
  isRequired = false,
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
      // errorMessage={errors[name] ? (errors[name].message as String) : ""}
      {...register(name)}
    >
      {options.map(({ key, label }) => (
        <SelectItem key={key}>{label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
