import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Admin Layout</h1>
      {children}
    </>
  );
};

export default layout;
