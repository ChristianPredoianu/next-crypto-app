import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Nav() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  function toggleDarkModeHandler() {
    setIsDarkMode(!isDarkMode);
    setTheme(colorTheme);
  }

  console.log("rendering");
  return (
    <>
      <header className="container mx-auto">
        <nav className="flex justify-between p-2">
          <p className="text-black dark:text-gray-200">CryptoInfo.</p>

          <div className="flex mr-4 bg-red-500">
            <p className="dark:text-gray-200">Dark Mode</p>
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out cursor-pointer ${
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
        </nav>
      </header>
      <div className="border-b border-b-black dark:border-b-gray-200"></div>
    </>
  );
}
