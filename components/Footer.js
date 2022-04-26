export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 text-sm text-center dark:bg-clr-dark-theme dark:text-gray-200">
      <p>
        Crypto market cap and pricing provided by{' '}
        <a
          href="https://www.coingecko.com/en/api/documentation"
          target="blank"
          rel="noopener noreferrer"
        >
          Coingecko.com
        </a>{' '}
      </p>
    </footer>
  );
}
