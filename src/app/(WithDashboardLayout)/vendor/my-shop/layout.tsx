"use client";

import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { useGetMyShop } from "@/src/hooks/vendor.hook";
import { ReactNode, Suspense } from "react";
import ShopBanner from "./_components/ShopBanner";
import CreateNewShop from "./_components/CreateNewShop";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);

  const { data: myShop } = useGetMyShop();
  console.log("My Shop: ", myShop);
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-3">
      {/* <h1 className="mb-3 text-xl font-semibold">My Shop</h1> */}

      <div className="space-y-6 bg-default-50 p-6 rounded-lg">
        {myShop ? (
          <>
            <FXErrorBoundary fallback={<h3>Suspend</h3>}>
              <Suspense fallback={<h3>Suspend</h3>}>
                <ShopBanner />
              </Suspense>
            </FXErrorBoundary>

            <div className="flex items-center gap-6 border-b border-default-300">
              <Link
                href={"/vendor/my-shop"}
                className={`font-semibold md:text-lg duration-700 ease-soft-spring ${pathname === "/vendor/my-shop" ? "border-b-2 border-primary-300" : "border-b-2 border-transparent text-default-500"}`}
              >
                Most Recent Product
              </Link>
              <Link
                href={"/vendor/my-shop/create-new-product"}
                className={`font-semibold md:text-lg duration-700 ease-soft-spring ${pathname === "/vendor/my-shop/create-new-product" ? "border-b-2 border-primary-300" : "border-b-2 border-transparent text-default-500"} `}
              >
                Create New Product
              </Link>
            </div>

            <div>{children}</div>
          </>
        ) : (
          <CreateNewShop />
        )}
      </div>
    </div>
  );
};

export default layout;
