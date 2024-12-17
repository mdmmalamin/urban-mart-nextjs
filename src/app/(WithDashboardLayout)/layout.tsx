import { ReactNode, Suspense } from "react";

import Sidebar from "./_components/Sidebar";

import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex items-start gap-6 h-screen">
        <div className="w-80 h-screen p-3 hidden lg:block">
          <FXErrorBoundary fallback={<h3>Hllo</h3>}>
            <Suspense fallback={<h3>Hllo</h3>}>
              <Sidebar />
            </Suspense>
          </FXErrorBoundary>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default layout;
