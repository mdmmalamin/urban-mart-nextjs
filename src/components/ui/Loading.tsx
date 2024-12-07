import DotLoadingSVG from "@/src/assets/icons/DotLoadingSVG";
import { Spinner } from "@nextui-org/spinner";

type TProps = {
  mode?: "Dark" | "White";
};

const Loading = ({ mode = "Dark" }: TProps) => {
  return (
    <div className="fixed inset-0 bg-black/20 dark:bg-white/20 backdrop-blur-lg z-50 flex flex-col gap-6 items-center justify-center">
      <Spinner size="lg" />
      <div className="flex items-end justify-end gap-2">
        <span
          className={`text-xl font-semibold ${mode === "Dark" ? "dark:text-white" : "text-white"}`}
        >
          Loading
        </span>
        <DotLoadingSVG mode={mode === "Dark" ? "White" : "Dark"} />
      </div>
    </div>
  );
};

export default Loading;
