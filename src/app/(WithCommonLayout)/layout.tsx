import Container from "@/src/components/ui/Container";
import Footer from "@/src/components/ui/Footer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>

      <Footer />
    </>
  );
};

export default layout;
