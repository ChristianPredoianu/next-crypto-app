import Nav from "../nav";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-slate-800">
      <Nav />
      {children}
    </div>
  );
}
