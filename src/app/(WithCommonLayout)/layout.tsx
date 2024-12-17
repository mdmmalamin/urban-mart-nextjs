import { ReactNode } from "react";

import Container from "@/src/components/ui/Container";
import Footer from "@/src/components/ui/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>

      <Footer />
    </>
  );
};

export default layout;
