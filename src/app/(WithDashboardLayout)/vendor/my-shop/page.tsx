"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ShopBanner from "./_components/ShopBanner";
import CreateNewShop from "./_components/CreateNewShop";

import { useGetMyInventory } from "@/src/hooks/inventory.hook";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { useGetMyShop } from "@/src/hooks/vendor.hook";
import Loading from "@/src/components/ui/Loading";

const ShopDashboard = () => {
  const { data: myInventory } = useGetMyInventory();

  // console.log("My Inventory: ", myInventory);

  const pathname = usePathname();

  // console.log(pathname);

  const { data: myShop, isPending: myShopIsPending } = useGetMyShop();

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-3">
      <div className="bg-default-50 p-6 rounded-lg">
        {!myShopIsPending ? (
          <>
            {myShop ? (
              <>
                <FXErrorBoundary fallback={<h3>Suspend</h3>}>
                  <Suspense fallback={<h3>Suspend</h3>}>
                    <ShopBanner />
                  </Suspense>
                </FXErrorBoundary>

                <div className="flex items-center gap-6 border-b border-default-300">
                  <Link
                    className={`font-semibold md:text-lg duration-700 ease-soft-spring ${pathname === "/vendor/my-shop" ? "border-b-2 border-primary-300" : "border-b-2 border-transparent text-default-500"}`}
                    href={"/vendor/my-shop"}
                  >
                    Most Recent Product
                  </Link>
                  <Link
                    className={`font-semibold md:text-lg duration-700 ease-soft-spring ${pathname === "/vendor/my-shop/create-new-product" ? "border-b-2 border-primary-300" : "border-b-2 border-transparent text-default-500"} `}
                    href={"/vendor/my-shop/create-new-product"}
                  >
                    Create New Product
                  </Link>
                </div>

                <div>
                  <h1 className="mb-3 text-xl font-semibold">My Inventory</h1>
                  <div>
                    {myInventory?.data
                      ?.slice(0, 5)
                      ?.map(({ product, id, availableQuantity }: any) => (
                        <div key={id}>
                          {product.name} | {availableQuantity}
                        </div>
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <CreateNewShop />
            )}
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopDashboard;
