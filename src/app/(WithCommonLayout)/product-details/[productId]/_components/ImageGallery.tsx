"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { TImages } from "@/src/types";

const ImageGallery = (images: { images: TImages[] }) => {
  const [isView, setIsView] = useState<TImages | null>(null);
  const primaryImage =
    images?.images?.find((item) => item?.isPrimary === true) ||
    images?.images?.[0];

  // // // console.log(primaryImage);

  useEffect(() => {
    setIsView(primaryImage);
  }, [primaryImage]);

  return (
    <div className="space-y-6">
      <Image
        alt="image"
        className="w-full h-96 rounded-md object-contain object-center bg-gradient-to-t to-default-200 from-default-50"
        height={500}
        src={isView?.url || ""}
        width={500}
        // onClick={() => setIsView(primaryImage)}
      />

      <div className="flex items-center gap-4">
        {images?.images?.map((item) => (
          <div key={item.id}>
            <Image
              key={item?.id}
              alt="image"
              className={`size-20 object-contain object-center rounded-md bg-gradient-to-t to-default-200 from-default-50 cursor-pointer duration-300 ${isView?.id === item?.id ? "outline outline-default-500" : ""}`}
              height={100}
              src={item?.url}
              width={100}
              onClick={() => setIsView(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
