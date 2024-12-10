import Container from "@/src/components/ui/Container";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default layout;
