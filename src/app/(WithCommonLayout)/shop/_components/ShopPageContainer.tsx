"use client";

import ShopCard from "./ShopCard";
import VendorProductCard from "./VendorProductCard";

import { useGetAllShops } from "@/src/hooks/shop.hook";
import { TShopProps } from "@/src/types";

const ShopPageContainer = async () => {
  const { data: shops } = useGetAllShops([
    {
      name: "searchTerm",
      value: "",
    },
  ]);

  return (
    <div className="bg-gradient-to-t to-default-200/50 from-default-50/50 space-y-6 p-3 rounded-lg">
      {shops?.data?.slice(0, 5)?.map(({ inventory, ...shop }: TShopProps) => (
        <div key={shop?.id} className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2 md:col-span-1">
            <ShopCard shop={shop} />
          </div>

          <div className="w-full col-span-2">
            <VendorProductCard inventory={inventory!} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPageContainer;
