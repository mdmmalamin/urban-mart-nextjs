"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import AvatarDropdown from "./AvatarDropdown";
import CartCount from "./CartCount";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/ui/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  Logo,
  LinkedInIcon,
} from "@/src/components/icons";

const Navbar = () => {
  return (
    <NextUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">
      {/* //? Large Device Logo & Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* //? Logo */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Urban Mart</p>
          </NextLink>
        </NavbarBrand>
        {/* //? Large Device Nav Items */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* //? Medium Device Social Links */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <CartCount />
        </NavbarItem>
        {/* //? Medium Device Sponsor */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
        {/* //? Avatar Dropdown */}
        <AvatarDropdown />
      </NavbarContent>

      {/* //? Small Device Social Links */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <CartCount />
        {/* //? Avatar Dropdown */}
        <AvatarDropdown />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* //? Nav Menu Items */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map(({ label, href }) => (
            <Link key={label} href={href}>
              <div className="w-full text-black dark:text-white">
                <NavbarMenuItem>{label}</NavbarMenuItem>
              </div>
            </Link>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
