"use client";

import ShopSVG from "@/src/assets/icons/ShopSVG";
import Container from "@/src/components/ui/Container";
import { useGetMyShop } from "@/src/hooks/vendor.hook";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import ThreeDotMenu from "./ThreeDotMenu";

const ShopBanner = () => {
  const { data } = useGetMyShop();
  const { data: myShop } = data || {};
  // console.log("My Shop Hook: ", myShop);
  return (
    <div className="w-full h-48 bg-gradient-to-tr to-default-300 from-default-50 flex items-end">
      <Container>
        <div className="flex gap-6 items-end">
          <Avatar
            color="secondary"
            className="w-36 h-36"
            isBordered
            src={myShop?.logo}
            name={myShop?.name || "Shop"}
          />

          <div className="space-y-2">
            <h3>{myShop?.name}</h3>

            <p className="text-sm text-default-500">
              777K followers • 500 products
            </p>

            <div className="flex items-center gap-6 justify-between">
              <Button className="text-nowrap">
                <ShopSVG /> Follow
              </Button>

              <ThreeDotMenu />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopBanner;
