import Image from "next/image";
import Link from "next/link";
import React from "react";

import AddToCart from "../ui/AddToCart";

import { TProductProps } from "@/src/types";
import { linkString } from "@/src/utils";
import { NO_IMAGE_FOUND } from "@/src/constant";

const RecentProductCard = ({
  product,
}: {
  product: Partial<TProductProps>;
}) => {
  const { id, name, price, images } = product;

  return (
    <div className="relative group max-w-64 w-full">
      <>
        {/* Position Absolute */}
        <p className="text-xs capitalize rounded-md px-2 py-0.5 bg-default-500 text-white absolute top-3 left-3">
          80% off
        </p>
        {/* <Wishlist
            idx={idx}
            className="border border-accent p-1 rounded-full absolute right-3 top-3"
            size="size-5"
          /> */}
      </>
      <Link
        href={`/product-details/${linkString(name as string)}-${id}`} //? ${linkString(name)}-
        // onClick={() => handleNavigation(_id)}
      >
        <div className="p-3 bg-gradient-to-t to-default-100/0 from-default-100 hover:from-default-100/0 border border-dark/15 hover:shadow-md hover:shadow-accent/20 max-w-64 rounded-lg duration-300 flex flex-col justify-between h-full group">
          {/* Card Body */}
          <div className="space-y-2 my-2">
            {/* Card Image */}

            <Image
              alt={`${name} recent product card image`}
              className="size-40 w-full bg-light/0 object-contain object-center rounded"
              height={160}
              src={images?.[0]?.url || NO_IMAGE_FOUND}
              width={160}
            />
            {/* Card Info */}
            {/* <div className="flex items-center justify-between my-2 text-xs">
              <span className="border px-2.5 rounded-full font-medium">
                {stock}
              </span>
            </div> */}

            <h3 className="text-sm font-semibold text-left line-clamp-2">
              {name}
            </h3>

            {/* Rating --> wii be changed later */}

            {/* <RatingOutOfFive rating={rating} /> */}
          </div>

          {/* Card Footer */}
          <div className="border-t pt-2">
            <p className="sm:text-lg font-semibold">
              ${((price as number) - 10).toFixed(2)}
            </p>

            <p className="text-xs sm:text-sm text-default-500 font-semibold line-through">
              ${price!.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>

      <>
        {/* Position Absolute */}
        <AddToCart id={id!} />
      </>
    </div>
  );
};

export default RecentProductCard;
