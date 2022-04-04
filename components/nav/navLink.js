import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ path, closeNav, title }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <li
      className={`block mt-4 md:inline-block md:mt-0 mr-4 dark:text-gray-200 hover:text-blue-600 ${
        currentRoute === path ? "text-blue-700 dark:text-gray-400" : ""
      }`}
      onClick={closeNav}
    >
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
}
