import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-12">{children}</div>;
};

export default layout;
