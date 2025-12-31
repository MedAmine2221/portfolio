"use client";

import { Tabs, Tab } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function NavMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tabs
      selectedKey={pathname}
      aria-label="Navigation"
      variant="bordered"
      onSelectionChange={(key) => router.push(key as string)}
    >
      {siteConfig.navItems.map((item) => (
        <Tab key={item.href} title={item.label} />
      ))}
    </Tabs>
  );
}
