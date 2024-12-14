import { ReactNode } from "react";
import Landing from "./_components/Landing";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Landing />
      {children}
    </>
  );
};

export default layout;
