import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavLink({ path, closeNav, title }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <li
      className={`block mt-4 md:inline-block md:mt-0 mr-4 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-200 ${
        currentRoute === path ? 'text-purple-500  dark:text-blue-600' : ''
      }`}
      onClick={closeNav}
    >
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
}
