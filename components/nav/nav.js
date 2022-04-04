import { useState } from "react";
import Image from "next/image";
import useDarkMode from "../../hooks/useDarkMode";
import HamburgerImage from "../../assets/images/hamburger.png";
import NavLink from "./navLink";

const navLinks = [
  { title: "Currency Info", path: "/currencyinfo" },
  { title: "Exchange", path: "/exchange" },
];

export default function Nav() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [colorTheme, setTheme] = useDarkMode();

  function toggleDarkModeHandler() {
    setIsDarkMode(!isDarkMode);
    setTheme(colorTheme);
  }

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  function closeNavHandler() {
    setIsNavOpen(false);
  }

  console.log(isNavOpen);
  return (
    <>
      <header className="w-full container mx-auto py-6 sm:px-4">
        <nav className="w-full flex justify-between items-center flex-wrap p-2">
          <p className="text-black dark:text-gray-200 md:mr-4">CryptoInfo.</p>
          <div className="flex flex-1 items-center ml-4">
            <p className="text-xs mr-2 dark:text-gray-200">Dark Mode</p>
            <div
              className={`w-12 h-6 items-center rounded-full p-1 duration-300 ease-in-out cursor-pointer ${
                isDarkMode ? "bg-green-500" : "bg-black"
              }`}
              onClick={toggleDarkModeHandler}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-md bg-white transform duration-300 ease-in-out ${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
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
                <NavLink
                  key={navLink.title}
                  title={navLink.title}
                  path={navLink.path}
                  closeNav={closeNavHandler}
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <div className="border-b border-b-black dark:border-b-gray-200"></div>
    </>
  );
}
