"use client";

import { useGetAllShops } from "@/src/hooks/shop.hook";
import { TShopProps } from "@/src/types";
import ShopCard from "./ShopCard";
import VendorProductCard from "./VendorProductCard";

const ShopPageContainer = async () => {
  const { data: shops } = useGetAllShops([
    {
      name: "searchTerm",
      value: "",
    },
  ]);

  return (
    <div className="bg-gradient-to-t to-default-200/50 from-default-50/50">
      {shops?.data?.slice(0, 5)?.map(({ inventory, ...shop }: TShopProps) => (
        <div className="grid md:grid-cols-3 gap-6" key={shop?.id}>
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
