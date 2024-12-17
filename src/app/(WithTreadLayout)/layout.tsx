import { ReactNode } from "react";

import Container from "@/src/components/ui/Container";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default layout;
