import { useRef } from 'react';
import Head from 'next/head';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { usePagination } from '@/hooks/usePagination';
import { gsap } from 'gsap';
import CurrencyInfoHeroSection from '@/components/hero-sections/CurrencyInfoHeroSection';
import CryptoInfoCard from '@/components/cards/CryptoInfoCard';
import CryptoInfoList from '@/components/crypto-info-list/CryptoInfoList';
import Pagination from '@/components/Ui/Pagination';
import ArrowUp from '@/components/Ui/ArrowUp';

export default function CurrencyInfoPage({ currencyData }) {
  const {
    currentCurrencies,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  } = usePagination(currencyData);

  const topFiveCurrencies = currencyData.slice(0, 5);

  const listRef = useRef(null);
  const cardsSectionRef = useRef(null);

  const c = gsap.utils.selector(cardsSectionRef);

  const cryptoCards = topFiveCurrencies.map((currency) => (
    <CryptoInfoCard key={currency.name} currency={currency} />
  ));

  useIsomorphicLayoutEffect(() => {
    const cardsAnimation = gsap.from(c('.cryptoInfoCard '), {
      y: 100,
      opacity: 0,
      stagger: 0.25,
      duration: 1,
    });

    return () => {
      cardsAnimation.kill();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Next Crypto App | Currency Info</title>
        <meta property="og:title" content="Currency Information" key="title" />
        <meta
          name="description"
          content="Your accurate cryptocurrency data and information"
        ></meta>
      </Head>
      <CurrencyInfoHeroSection />
      <section
        className="container mx-auto flex flex-col md:flex-row items-center flex-wrap gap-y-10 md:gap-16 md:justify-around py-10 lg:py-24"
        ref={cardsSectionRef}
      >
        {cryptoCards}
      </section>
      <section className="container mx-auto" ref={listRef}>
        <h3 className="text-center text-4xl py-20">Currencies</h3>
        <CryptoInfoList currencyData={currentCurrencies} />
        <div className="mt-10">
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={currencyData.length}
            currentPage={currentPage}
            onPaginate={paginationHandler}
            onPrevPage={prevPageHandler}
            onNextPage={nextPageHandler}
          />
        </div>
        <div className="text-center py-10 mt-10">
          <ArrowUp sectionRef={listRef} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
  );
  const currencyData = await res.json();

  return {
    props: { currencyData },
  };
}
