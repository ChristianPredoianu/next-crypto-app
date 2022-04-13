import Nav from '@/components/nav/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="dark:bg-clr-dark-theme dark:text-gray-300">
        {children}
      </main>
    </>
  );
}
