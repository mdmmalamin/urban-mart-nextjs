import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IDatePicker extends IInput {}

const FXDatePicker = ({
  label,
  name,
  variant = "underlined",
  isRequired = false,
  defaultValue,
}: IDatePicker) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          label={label}
          className="min-w-full sm:min-w-xs"
          variant={variant}
          defaultValue={defaultValue}
          // size={size}
          // required={required}
          // isInvalid={!!errors[name]}
          // errorMessage={errors[name] ? (errors[name].message as String) : ""}
          {...fields}
          isRequired={isRequired}
        />
      )}
    />
  );
};

export default FXDatePicker;
