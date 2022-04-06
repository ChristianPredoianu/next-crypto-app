import { useState } from "react";
import Image from "next/image";
import HamburgerImage from "@/assets/images/hamburger.png";
import NavLinks from "@/components/nav/NavLinks";

const navLinks = [
  { title: "Currency Info", path: "/currencyinfo" },
  { title: "Exchange", path: "/exchange" },
];

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  function closeNavHandler() {
    setIsNavOpen(false);
  }

  return (
    <>
      <div className="block md:hidden">
        <div
          className="flex align-center bg-black p-1 rounded-lg "
          onClick={toggleNavHandler}
        >
          <title>Menu</title>
          <Image
            src={HamburgerImage}
            alt="hamburger menu"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      <div
        className={`w-full flex-grow md:flex md:items-center md:grow-0 md:w-auto md:ml-4 ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {navLinks.map((navLink) => (
            <NavLinks
              key={navLink.title}
              title={navLink.title}
              path={navLink.path}
              closeNav={closeNavHandler}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
