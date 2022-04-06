import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/">
      <a className="text-black font-bold dark:text-gray-300 md:mr-4">
        CryptoInfo.
      </a>
    </Link>
  );
}
