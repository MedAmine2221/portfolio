"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";

import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
import NavMenu from "./navbar-menu";

export const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const match = siteConfig.navItems.find(
        (item) => item.label.toLowerCase() === search.toLowerCase()
      );
      if (match) router.push(match.href);
      else alert("Page not found");
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* LEFT */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/" className="font-bold">
            Mohamed Amine LAZREG
          </NextLink>
        </NavbarBrand>

        {/* Desktop tabs */}
        <div className="hidden sm:flex">
          <NavMenu />
        </div>
      </NavbarContent>

      {/* RIGHT DESKTOP */}
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="flex gap-3">
          <Link isExternal href={siteConfig.links.linkedIn}>
            <FiLinkedin />
          </Link>
          <Link isExternal href={siteConfig.links.facebook}>
            <FiFacebook />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <FiInstagram />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          {searchInput}
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              onPress={() => router.push(item.href)}
              className="w-full"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
