import NavLogo from "@/components/nav/NavLogo";
import DarkModeToggler from "@/components/nav/DarkModeToggler";
import Menu from "@/components/nav/Menu";

export default function Nav() {
  return (
    <>
      <header className="w-full container mx-auto py-6">
        <nav className="w-full flex justify-between items-center flex-wrap py-2">
          <NavLogo />
          <DarkModeToggler />
          <Menu />
        </nav>
      </header>
      <div className="border-b border-b-black dark:border-b-gray-200"></div>
    </>
  );
}
