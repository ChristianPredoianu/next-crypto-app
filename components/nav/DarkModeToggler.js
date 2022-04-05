import { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function DarkModeToggler() {
  let [isDarkMode, setIsDarkMode] = useState(false);

  const [colorTheme, setTheme] = useDarkMode();

  function toggleDarkModeHandler() {
    setIsDarkMode(!isDarkMode);
    setTheme(colorTheme);
  }

  return (
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
  );
}
