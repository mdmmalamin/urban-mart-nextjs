"use client";

import { SelectorSVG } from "@/src/assets/icons/SVGicons";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";

const sortBy = [
  { key: "", label: "Best Price" },
  { key: "asc", label: "Price low to high" },
  { key: "desc", label: "Price hight to low" },
];
const FXSortBy = ({ params }: { params: any }) => {
  const router = useRouter();

  const handleQueryParams = (key: string) => {
    if (params?.category) {
      router.push(
        `/all-products?category=${params?.category}&sortBy=price&sortOrder=${key}`
      );
    } else {
      router.push(`/all-products?sortBy=price&sortOrder=${key}`);
    }
  };

  return (
    <div className="flex justify-end gap-2 items-center text-sm text-default-500">
      Sort By
      <Select
        disableSelectorIconRotation
        defaultSelectedKeys={[""]}
        className="max-w-52"
        selectorIcon={<SelectorSVG />}
      >
        {sortBy.map(({ key, label }) => (
          <SelectItem onClick={() => handleQueryParams(key)} key={key}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FXSortBy;
