import Footer from "@/src/components/ui/Footer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default layout;
