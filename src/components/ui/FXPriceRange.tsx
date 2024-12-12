import { Slider } from "@nextui-org/slider";

type TSliderProps = {
  defaultValue?: number[];
  maxValue?: number;
  minValue?: number;
  step?: number;
  currency?: string;
  onChangeEnd?: ((value: number | number[]) => void) | undefined;
};

const FXPriceRange = ({
  defaultValue = [100, 5000],
  maxValue = 1000,
  minValue = 0,
  step = 100,
  currency = "BDT",
  onChangeEnd,
}: TSliderProps) => {
  return (
    <>
      <Slider
        size="sm"
        showSteps={false}
        showTooltip={true}
        className="max-w-md"
        defaultValue={defaultValue}
        formatOptions={{ style: "currency", currency: currency }}
        label="Price Range"
        maxValue={Math.ceil(maxValue) + 100}
        minValue={minValue}
        step={step}
        onChangeEnd={onChangeEnd}
      />
    </>
  );
};

export default FXPriceRange;
