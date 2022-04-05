import NavLogo from "@/components/nav/NavLogo";
import DarkModeToggler from "./DarkModeToggler";
import HamburgerMenu from "./HamburgerMenu";

export default function Nav() {
  return (
    <>
      <header className="w-full container mx-auto py-6 sm:px-4">
        <nav className="w-full flex justify-between items-center flex-wrap p-2">
          <NavLogo />
          <DarkModeToggler />
          <HamburgerMenu />
        </nav>
      </header>
      <div className="border-b border-b-black dark:border-b-gray-200"></div>
    </>
  );
}
