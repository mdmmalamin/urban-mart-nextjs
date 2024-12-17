import { ReactNode } from "react";

import FilterSidebar from "./_components/FilterSidebar";

import Container from "@/src/components/ui/Container";
import Footer from "@/src/components/ui/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-4 lg:gap-6">
          <FilterSidebar />

          <div className="col-span-full lg:col-span-3 min-h-screen space-y-12">
            {children}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default layout;
