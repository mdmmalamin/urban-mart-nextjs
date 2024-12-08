import { ReactNode } from "react";

const layout = ({
  children,
  // flashSale,
}: {
  children: ReactNode;
  // flashSale: ReactNode;
}) => {
  return (
    <div className="space-y-12">
      {children}
      {/* {flashSale} */}
    </div>
  );
};

export default layout;
