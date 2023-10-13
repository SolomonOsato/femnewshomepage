"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import IconMenu from "../../../public/images/icon-menu.svg";
import IconMenuClose from "../../../public/images/icon-menu-close.svg";
import { useState } from "react";

export default function Header() {
  const [menuState, setMenuState] = useState<"open" | "close">("close");
  const isOpen = menuState === "open" ? "translate-x-0" : "translate-x-full";
  const NavItems = ["home", "new", "popular", "trending", "categories"];

  return (
    <header className="flex justify-between items-center h-fit pt-2 pb-0">
      <Link href={"/"}>
        <Image src={Logo} alt="News Homepage" />
      </Link>
      <Image
        onClick={() => {
          setMenuState("open");
        }}
        className="md:hidden"
        src={IconMenu}
        alt="menu"
      />
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          {NavItems.map((item, index) => (
            <li key={index}>
              <Link
                className="cursor-pointer hover:text-primary-orange active:text-primary-orange capitalize"
                href={"/"}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={`md:hidden fixed top-0 right-0 bottom-0 w-screen z-10 transition-transform grid justify-end text-neutral-dGrayBlue text-xl font-bold backdrop-blur-sm bg-neutral-vdGrayBlue/10 ${isOpen}`}
      >
        <div
          onClick={() => setMenuState("close")}
          className="fixed top-0 left-0 bottom-0 w-[30vw]"
        ></div>
        <ul className="grid content-start items-start gap-8 pt-40 w-[70vw] h-screen bg-neutral-offwhite px-8">
          <Image
            onClick={() => {
              setMenuState("close");
            }}
            src={IconMenuClose}
            alt="close menu"
            loading="lazy"
            className="absolute top-8 right-8"
          />
          {NavItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setMenuState("close")}
                className="cursor-pointer hover:text-primary-orange active:text-primary-orange capitalize"
                href={"/"}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
