"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TLinkProps = {
  label: string;
  href: string;
}[];

const SidebarOptions = ({ links }: { links: TLinkProps }) => {
  const pathname = usePathname();

  return (
    <div className="w-full space-y-2 p-3">
      {links?.map(({ label, href }) => (
        <div key={label}>
          <Link
            href={href}
            className={`inline-block w-full rounded-lg px-3 py-2 hover:bg-default-200 duration-300 ${pathname === href && "bg-default-300"}`}
          >
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarOptions;
