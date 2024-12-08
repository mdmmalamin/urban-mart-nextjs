"use client";

import { TInventoryProps } from "@/src/types";
import { linkString } from "@/src/utils/linkString";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

const ShopAvatar = ({ inventory }: { inventory: TInventoryProps }) => {
  return (
    <Link
      href={`/shop/${linkString(inventory?.shop?.name!)}-${inventory?.shop?.id}`}
      className="flex items-center gap-2 group"
    >
      <Avatar
        size="sm"
        className="border-2 border-default-300 group-hover:border-secondary-500 duration-300"
        src={inventory?.shop?.logo}
      />
      <h1 className="text-sm font-medium group-hover:text-secondary-500 duration-300">
        {inventory?.shop?.name}
      </h1>
    </Link>
  );
};

export default ShopAvatar;
