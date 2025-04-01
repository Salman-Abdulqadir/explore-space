"use client";
import Image from "next/image";
import logo from "@/assets/shared/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

import hamburgerIcon from "@/assets/shared/icon-hamburger.svg";
import closeIcon from "@/assets/shared/icon-close.svg";
import { useState } from "react";

export type MenuItem = {
  prefix: string;
  title: string;
  url: string;
};
const menuItems: MenuItem[] = [
  { prefix: "00", title: "HOME", url: "/" },
  { prefix: "01", title: "DESTINATION", url: "/destination" },
  { prefix: "02", title: "CREW", url: "/crew" },
  { prefix: "03", title: "TECHNOLOGY", url: "/technology" },
];
const AppHeader = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="flex justify-between items-center pt-space-500 px-space-300 gap-space-800 md:px-0 md:pl-space-500 lg:gap-0 ">
      <div className="flex flex-none lg:flex-1 items-center gap-space-800">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden lg:block flex-1 h-[1px] bg-white/25 translate-x-[20px] z-100"></div>
      </div>

      <nav className="flex-1 px-space-800 bg-white/5 backdrop-blur-sm hidden md:flex flex-col justify-center h-full">
        <ul className="flex gap-space-600 justify-end">
          {menuItems.map(({ url, title, prefix }, index) => {
            const isActive = pathname === url;
            return (
              <Link href={url} key={`app-header-menu-item-${title}-${index}`}>
                <li
                  className={`
                flex items-center item text-white text-level-8 transition-all duration-300 min-h-space-1000
                border-b-[3px]  hover:border-white/50 ${
                  isActive ? "border-white" : "border-transparent"
                }
              `}
                >
                  <span className="font-bold mr-space-150">{prefix}</span>
                  {title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="md:hidden">
        <button className="cursor-pointer">
          <Image
            src={hamburgerIcon}
            alt="hamburger-icon"
            className="w-[24px]"
            onClick={() => setDrawerOpen(true)}
          />
        </button>
        {drawerOpen && (
          <div className="absolute z-50 top-[0px] right-[0px] w-[254px] min-h-screen bg-drawer-bg/15 backdrop-blur-sm py-space-500 px-space-300 flex flex-col">
            <button
              className="cursor-pointer self-end mb-space-600"
              onClick={() => setDrawerOpen(false)}
            >
              <Image src={closeIcon} alt="close-icon" className="w-[24px] " />
            </button>
            <nav>
              <ul className="flex flex-col gap-space-400">
                {menuItems.map(({ url, title, prefix }, index) => {
                  const isActive = pathname === url;
                  return (
                    <Link
                      href={url}
                      key={`app-header-menu-item-mobile-${title}-${index}`}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <li
                        className={`
                flex items-center item text-white text-level-8 transition-all duration-300 
                border-r-[3px]  hover:border-white/50 ${
                  isActive ? "border-white" : "border-transparent"
                }
              `}
                      >
                        <span className="font-bold mr-space-150">{prefix}</span>
                        {title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
