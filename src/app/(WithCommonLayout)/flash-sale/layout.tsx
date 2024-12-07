import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-t to-default-100 from-transparent">
      {children}
    </div>
  );
};

export default layout;
