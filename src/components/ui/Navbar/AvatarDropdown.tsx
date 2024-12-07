"use client";

import { avatarRoutes } from "@/src/config/avatar.route";
import { protectedRouts } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthServices";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const AvatarDropdown = () => {
  const { user, setIsLoading } = useUser();
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
              className="cursor-pointer"
              isBordered
              radius="lg"
              src={user?.profilePhoto as string}
              name={user?.name}
            />
          </DropdownTrigger>
          <DropdownMenu>
            <>
              {avatarRoutes.map(({ label, href }) => (
                <DropdownItem
                  key={label}
                  className={`m-0 p-0 my-1 ${pathname === href && "bg-default-300"}`}
                >
                  <Link href={href} className={`w-full inline-block px-3 py-2`}>
                    {label}
                  </Link>
                </DropdownItem>
              ))}
            </>
            <DropdownItem
              onClick={() => handleLogout()}
              key="Logout"
              className="text-danger"
              color="danger"
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link href="/login" className="text-sm font-bold">
          Login
        </Link>
      )}
    </>
  );
};

export default AvatarDropdown;
