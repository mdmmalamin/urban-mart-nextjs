"use client";

import { TImage } from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageGallery = (images: { images: TImage[] }) => {
  const [isView, setIsView] = useState<TImage | null>(null);
  const primaryImage =
    images?.images?.find((item) => item?.isPrimary === true) ||
    images?.images?.[0];

  // console.log(primaryImage);

  useEffect(() => {
    setIsView(primaryImage);
  }, [primaryImage]);
  return (
    <div className="space-y-6">
      <Image
        alt="image"
        src={isView?.url || ""}
        width={500}
        height={500}
        className="w-full h-96 rounded-md object-contain object-center bg-gradient-to-t to-default-200 from-default-50"
        // onClick={() => setIsView(primaryImage)}
      />

      <div className="flex items-center gap-4">
        {images?.images?.map((item) => (
          <div>
            <Image
              key={item?.id}
              alt="image"
              src={item?.url}
              width={100}
              height={100}
              className={`size-20 object-contain object-center rounded-md bg-gradient-to-t to-default-200 from-default-50 cursor-pointer duration-300 ${isView?.id === item?.id ? "outline outline-default-500" : ""}`}
              onClick={() => setIsView(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
