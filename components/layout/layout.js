import Nav from "@/components/nav/Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen dark:bg-slate-800 dark:text-gray-200">
      <Nav />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
