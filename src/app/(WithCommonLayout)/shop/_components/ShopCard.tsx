import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import Link from "next/link";

import { TShopProps } from "@/src/types";
import ShopSVG from "@/src/assets/icons/ShopSVG";

const ShopCard = ({ shop }: { shop: Partial<TShopProps> }) => {
  return (
    <>
      <div className="w-full rounded-lg p-2 bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/dgxlbj77m/image/upload/v1733729260/urban-mart/cdn-images/apple-products.avif')]">
        <div className="backdrop-blur-xl bg-default-500/50 rounded-2xl p-2 flex items-start gap-4">
          <Link href={""}>
            {shop?.logo ? (
              <Image
                alt={`${shop?.name} logo.`}
                className="border-2 border-secondary-400 rounded-2xl p-1"
                height={96}
                src={shop?.logo || ""}
                width={96}
              />
            ) : (
              <Skeleton className="aspect-square size-24 object-contain object-center bg-default-50" />
            )}
          </Link>

          <div className="space-y-1">
            <Link className="text-lg font-semibold" href={""}>
              {shop?.name}
            </Link>

            <p className="text-sm text-default-300">
              777K followers • 500 products
            </p>

            <div className="flex items-center gap-6 justify-between">
              <Button className="text-nowrap">
                <ShopSVG /> Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
