import Nav from "../nav/nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen dark:bg-slate-800 dark:text-gray-200">
      <Nav />
      {children}
    </div>
  );
}
