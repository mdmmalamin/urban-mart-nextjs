import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}

const FXTextArea = ({ name, label, variant = "underlined" }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Textarea
      className="bg-default-50"
      {...register(name)}
      label={label}
      minRows={6}
      variant={variant}
    />
  );
};

export default FXTextArea;
