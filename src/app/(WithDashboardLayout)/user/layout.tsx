import Container from "@/src/components/ui/Container";
import { ReactNode } from "react";
import Sidebar from "../_components/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <main className="grid grid-cols-5 gap-12">
        <div className="col-span-5 md:col-span-2">
          {/* <FXErrorBoundary
            fallback={
              <p className="text-danger-500 h-96 w-full">Error Boundary...</p>
            }
          > */}
          {/* <Suspense
              fallback={
                <p className="text-danger-500 h-96 w-full">
                  Suspense Loading...
                </p>
              }
            > */}
          <Sidebar />
          {/* </Suspense> */}
          {/* </FXErrorBoundary> */}
        </div>

        <div className="col-span-5 md:col-span-3 rounded-lg p-3 bg-gradient-to-t to-default-100 from-transparent">
          {children}
        </div>
      </main>
    </Container>
  );
};

export default layout;
