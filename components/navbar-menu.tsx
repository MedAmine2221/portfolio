"use client";

import { siteConfig } from "@/config/site";
import { Tabs, Tab } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function NavMenu() {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        onSelectionChange={(key) => {
          router.push(key as string);
        }}
      >
        {siteConfig.navItems.map((item) => (
          <Tab
            key={item.href} // 👈 مهم
            title={
              <div className="flex items-center space-x-2">
                <span>{item.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
}
