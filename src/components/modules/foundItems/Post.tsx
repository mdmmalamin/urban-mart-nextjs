"use client";

import ArrowSVG from "@/src/assets/icons/ArrowSVG";
import CalendarSVG from "@/src/assets/icons/CalenderSVG";
import LocationSVG from "@/src/assets/icons/LocationSVG";
import { formatDate } from "@/src/utils";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { useState } from "react";
import ClaimRequestModal from "./CliamRequestModal";
import { Button } from "@nextui-org/button";
import FXModal from "../../ui/FXModal";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";
import AuthenticationModal from "./AuthenticationModal";
import { TProductProps } from "@/src/types";

const Post = ({ post }: { post: TProductProps }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [onGallery, setOnGallery] = useState(false);
  const [count, setCount] = useState(0);

  const {
    title,
    description,
    images,
    location,
    city,
    dateFound,
    status,
    isReported,
    reportCount,
    user,
    questions,
    _id,
  } = post || {};

  const { name, email, profilePhoto } = user || {};

  const { user: currentUser } = useUser();

  return (
    <section className="max-w-lg min-w-72 mx-auto mb-12 p-3 space-y-3 rounded-lg ring ring-default-50 bg-gradient-to-t to-default-50 from-transparent">
      {/* //? User Section */}
      <div className="flex items-center gap-6 border-b border-default-200 pb-2">
        <Avatar isBordered radius="full" src={profilePhoto} name={name} />

        <div>
          <h1 className="font-semibold">{name}</h1>
          <h3 className="text-sm font-semibold text-default-500 line-clamp-1">
            {email}
          </h3>
        </div>
      </div>

      {/* //? Post Title Content  */}
      <div className="flex flex-col sm:flex-row items-start justify-between overflow-hidden gap-1 border-b border-default-200 pb-2">
        <Link href={`/found-items/${_id}`} className="sm:w-8/12">
          <h1 className="text-2xl font-semibold line-clamp-1">{title}</h1>
          <p className="flex items-center gap-2 flex-nowrap text-sm">
            <span>Found On:</span> <CalendarSVG />{" "}
            <span>{formatDate(dateFound)}</span>
          </p>
        </Link>

        <div className="flex items-center justify-end gap-1 sm:w-4/12 flex-wrap text-sm text-right order-first sm:order-last text-default-600">
          <p className="flex items-center gap-1">
            <LocationSVG /> {location},
          </p>{" "}
          <p>{city}</p>
        </div>
      </div>

      {/* //? Post Description */}
      <div
        className={`text-medium hover:bg-default-50 rounded-md duration-300 ${!seeMore && "line-clamp-2"}`}
        onClick={() => setSeeMore(!seeMore)}
      >
        {description}
      </div>

      {/* //? Post Thumbnail Image */}
      <div
        className="border-b border-default-200 relative pb-2"
        onClick={() => setOnGallery(!onGallery)}
      >
        <Image
          alt={`${title} images.`}
          width={500}
          height={500}
          src={images[0]}
          className="rounded-lg cursor-pointer hover:opacity-hover duration-300 select-none"
        />
      </div>
      {/* //? Gallery Modal */}
      {onGallery ? (
        <div
          className={`fixed inset-0 bg-default-50/60 z-30 h-full`}
          onClick={() => setOnGallery(!onGallery)}
        >
          <div className="flex items-center justify-between max-w-2xl mx-auto h-full">
            <button
              className="bg-default-100 rounded-full px-4 py-2 z-50"
              onClick={() => {
                if (images.length > count) {
                  setCount((prev) => prev + 1);
                }
              }}
            >
              <ArrowSVG className="rotate-180" />
            </button>

            <button
              className="bg-default-100 rounded-full px-4 py-2 z-50"
              onClick={() => {
                if (images.length > count) {
                  setCount((prev) => prev + 1);
                }
              }}
            >
              <ArrowSVG />
            </button>
          </div>

          {/* <div className="flex items-center justify-between">
            <div></div>
            <button
              className="bg-default-100 rounded-full p-2 rotate-45 z-50"
              onClick={() => setOnGallery(!onGallery)}
            >
              <PlusSVG />
            </button>
          </div> */}

          <div className="max-w-xl w-full mx-auto h-full absolute inset-0 flex flex-col items-center justify-center p-6 z-40">
            <Image
              alt={`${title} images.`}
              width={700}
              height={700}
              src={images[count]}
              className="rounded-lg cursor-pointer hover:opacity-hover duration-300 select-none"
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div
        className={`grid ${user._id !== currentUser?._id ? "grid-cols-2" : "grid-cols-1"}  items-center gap-2`}
      >
        {!currentUser?._id ? (
          <AuthenticationModal id={_id} />
        ) : (
          user._id !== currentUser?._id && (
            <ClaimRequestModal id={_id} questions={questions} />
          )
        )}

        <FXModal buttonClassName="flex-1" buttonText="Share" title="Share">
          Share
        </FXModal>
      </div>
    </section>
  );
};

export default Post;
