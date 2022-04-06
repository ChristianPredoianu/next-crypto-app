import Nav from "@/components/nav/Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen dark:bg-clr-dark-theme dark:text-gray-300">
      <Nav />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
