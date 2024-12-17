"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  adminAvatarRoutes,
  customerAvatarRoutes,
  vendorAvatarRoutes,
} from "@/src/config/avatar.route";
import { protectedRouts } from "@/src/constant";
import { useCurrentUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthServices";

const AvatarDropdown = () => {
  const { user, setIsLoading } = useCurrentUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setIsLoading(true);

    if (protectedRouts.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <>
      {user ? (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              className="cursor-pointer"
              name={user?.fullName}
              radius="lg"
              src={user?.avatar as string}
            />
          </DropdownTrigger>
          <DropdownMenu>
            <>
              {user?.role === "CUSTOMER" &&
                customerAvatarRoutes.map(({ label, href }) => (
                  <DropdownItem
                    key={label}
                    className={`m-0 p-0 my-1 ${pathname === href && "bg-default-300"}`}
                  >
                    <Link
                      className={`w-full inline-block px-3 py-2`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </DropdownItem>
                ))}
            </>

            <>
              {user?.role === "VENDOR" &&
                vendorAvatarRoutes.map(({ label, href }) => (
                  <DropdownItem
                    key={label}
                    className={`m-0 p-0 my-1 ${pathname === href && "bg-default-300"}`}
                  >
                    <Link
                      className={`w-full inline-block px-3 py-2`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </DropdownItem>
                ))}
            </>

            <>
              {(user?.role === "ADMIN" || user?.role === "SUPER_ADMIN") &&
                adminAvatarRoutes.map(({ label, href }) => (
                  <DropdownItem
                    key={label}
                    className={`m-0 p-0 my-1 ${pathname === href && "bg-default-300"}`}
                  >
                    <Link
                      className={`w-full inline-block px-3 py-2`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </DropdownItem>
                ))}
            </>

            <DropdownItem
              key="Logout"
              className="text-danger"
              color="danger"
              onClick={() => handleLogout()}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link className="text-sm font-bold" href="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default AvatarDropdown;
