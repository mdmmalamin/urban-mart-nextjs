"use client";

import ArrowSVG from "@/src/assets/icons/ArrowSVG";
import { Button } from "@nextui-org/button";
import { useState } from "react";

const FilterSidebar = () => {
  const [isFilterShow, setFilterShow] = useState(false);

  return (
    <div className="relative z-20 text-nowrap">
      <div
        className={`${isFilterShow ? "-translate-x-full -left-3" : ""} absolute duration-300 min-w-72 w-full h-screen border border-default-200 p-2 rounded-lg bg-default-50/10 backdrop-blur-3xl`}
      >
        <Button
          className="lg:hidden absolute -right-5 top-5"
          isIconOnly
          radius="full"
          onClick={() => setFilterShow(!isFilterShow)}
        >
          <ArrowSVG
            className={`${isFilterShow ? "" : "rotate-180"} duration-300 ease-soft-spring`}
          />
        </Button>

        <h1>Filter : {isFilterShow.toString()}</h1>
      </div>
    </div>
  );
};

export default FilterSidebar;
