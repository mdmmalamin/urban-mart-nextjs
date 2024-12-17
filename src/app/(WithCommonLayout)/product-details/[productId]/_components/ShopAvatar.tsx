"use client";

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import { TInventoryProps } from "@/src/types";
import { linkString } from "@/src/utils";

const ShopAvatar = ({ inventory }: { inventory: TInventoryProps }) => {
  return (
    <Link
      className="flex items-center gap-2 group"
      href={`/shop/${linkString(inventory?.shop?.name!)}-${inventory?.shop?.id}`}
    >
      <Avatar
        className="border-2 border-default-300 group-hover:border-secondary-500 duration-300"
        size="sm"
        src={inventory?.shop?.logo}
      />
      <h1 className="text-sm font-medium group-hover:text-secondary-500 duration-300">
        {inventory?.shop?.name}
      </h1>
    </Link>
  );
};

export default ShopAvatar;
