"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center bg-black">
      <NavbarDemo className="top-2" />
    </div>
  );
}

function NavbarDemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="home">
          <div className="flex flex-col space-y-4 text-sm">
          <ProductItem
              title=""
              href="/"
              src="/home.png"
              description=""
            />
          </div>
        </MenuItem>
        </Link>
        <Link href="/about">
        <MenuItem setActive={setActive} active={active} item="about me">
          <div className="  flex flex-col space-y-4 text-sm">
            <ProductItem
              title="About Me"
              href="/about"
              src=""
              description="Learn more about me"
            />
          </div>
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="social media">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
