import Nav from '@/components/nav/Nav';
import ProgressBar from '@/components/Ui/ProgressBar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <ProgressBar />
      <main className="dark:bg-clr-dark-theme dark:text-gray-300">
        {children}
      </main>
      <Footer />
    </>
  );
}
