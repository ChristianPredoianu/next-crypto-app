import Nav from '@/components/nav/Nav';
import ProgressBar from '../Ui/ProgressBar';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <ProgressBar />
      <main className="dark:bg-clr-dark-theme dark:text-gray-300">
        {children}
      </main>
    </>
  );
}
