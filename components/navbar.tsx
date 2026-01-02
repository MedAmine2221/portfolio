"use client";;
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";

import NavMenu from "./navbar-menu";
import { siteConfig } from "@/config/site";
import { GithubIcon, SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const match = siteConfig.navItems.find(
        (item) => item.label.toLowerCase() === search.toLowerCase(),
      );

      if (match) router.push(match.href);
      else alert("Page not found");
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100/50 border border-default-200/50 hover:border-default-300 transition-colors",
        input: "text-sm",
      }}
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none" />
      }
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );

  const socialLinks = (
    <div className="flex items-center">
      <Link
        isExternal
        className="mx-2 text-default-500 hover:text-primary transition-colors"
        href={siteConfig.links.linkedIn}
      >
        <FiLinkedin size={20} />
      </Link>
      <Link
        isExternal
        className="text-default-500 hover:text-primary transition-colors"
        href={siteConfig.links.facebook}
      >
        <FiFacebook size={20} />
      </Link>
      <Link
        isExternal
        className="mx-2 text-default-500 hover:text-primary transition-colors"
        href={siteConfig.links.instagram}
      >
        <FiInstagram size={20} />
      </Link>
      <Link
        isExternal
        className="text-default-500 hover:text-primary transition-colors"
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
      </Link>
    </div>
  );

  return (
    <div className="w-full backdrop-blur-lg bg-black/70 border-b border-default-200/20 sticky top-0 z-50">
      {/* First Row: Name and Social Icons - Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <NextLink
          className="font-bold text-white text-lg tracking-tight hover:text-primary transition-colors" 
          href="/"
        >
          Mohamed Amine LAZREG
        </NextLink>
        {/* Second Row: Centered Menu - Desktop */}
        <div className="hidden md:flex justify-center border-t border-default-200/20 py-2">
          <NavMenu />
        </div>
        <div className="flex items-center gap-6">
          {socialLinks}
          <div className="hidden lg:block">{searchInput}</div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-3">
          <NextLink
            className="font-bold text-white text-lg tracking-tight"
            href="/"
          >
            Mohamed Amine LAZREG
          </NextLink>
          {socialLinks}
        </div>
        <div className="w-full border-t border-default-200/20 py-3">
          <div className="overflow-x-auto scrollbar-hide px-3">
            <div className="inline-flex justify-center w-full">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
