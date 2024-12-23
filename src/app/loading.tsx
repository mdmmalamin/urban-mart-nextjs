import { Spinner } from "@nextui-org/spinner";

import DotLoadingSVG from "../assets/icons/DotLoadingSVG";

const loading = () => {
  return (
    <div className="fixed inset-0 bg-black/20 dark:bg-white/20 backdrop-blur-lg z-50 flex flex-col gap-6 items-center justify-center">
      <Spinner size="lg" />
      <div className="flex items-end justify-end gap-2">
        <span className={`text-xl font-semibold dark:text-white text-black`}>
          Global Loading...
        </span>
        <DotLoadingSVG mode="White" />
      </div>
    </div>
  );
};

export default loading;
