"use client";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { FiFacebook, FiGlobe, FiInstagram, FiLinkedin } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useTranslations } from "next-intl";

import NavMenu from "./navbar-menu";

import { siteConfig } from "@/config/site";
import { GithubIcon, SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const t = useTranslations();
  const tNavbar = useTranslations("navbar");
  const siteConfigRes = siteConfig(tNavbar);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
  ];
  const changeLang = (lang: string) => {
    const segments = pathname.split("/");

    segments[1] = lang;
    router.push(segments.join("/"));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const match = siteConfigRes.navItems.find(
        (item) => item.label.toLowerCase() === search.toLowerCase(),
      );
      const locale = pathname.split("/")[1];

      if (match) {
        router.push(`/${locale}${match.href}`);
      } else {
        alert("Page not found");
      }
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper:
          "bg-default-100/50 border border-default-200/50 hover:border-default-300 transition-colors",
        input: "text-sm",
      }}
      placeholder={t("navbar.search_placeholder")}
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
      <Button
        className="mx-2 text-default-500 hover:text-primary bg-transparent transition-colors"
        onPress={() => setIsLangOpen(true)}
      >
        <FiGlobe size={20} />
      </Button>
      <Link
        isExternal
        className="mx-2 text-default-500 hover:text-primary transition-colors"
        href={siteConfigRes.links.linkedIn}
      >
        <FiLinkedin size={20} />
      </Link>
      <Link
        isExternal
        className="text-default-500 hover:text-primary transition-colors"
        href={siteConfigRes.links.facebook}
      >
        <FiFacebook size={20} />
      </Link>
      <Link
        isExternal
        className="mx-2 text-default-500 hover:text-primary transition-colors"
        href={siteConfigRes.links.instagram}
      >
        <FiInstagram size={20} />
      </Link>
      <Link
        isExternal
        className="text-default-500 hover:text-primary transition-colors"
        href={siteConfigRes.links.github}
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
        <NavMenu />
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
              <NavMenu isMobile />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isLangOpen}
        placement="center"
        onOpenChange={setIsLangOpen}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("chooseLanguage")}
              </ModalHeader>

              <ModalBody>
                <div className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      className="justify-start"
                      variant="flat"
                      onPress={() => {
                        changeLang(lang.code);
                        onClose();
                      }}
                    >
                      {lang.label}
                    </Button>
                  ))}
                </div>
              </ModalBody>

              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
