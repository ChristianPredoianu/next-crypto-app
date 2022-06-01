import { useRef } from 'react';
import Head from 'next/head';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { usePagination } from '@/hooks/usePagination';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ExchangeHeroSection from '@/components/hero-sections/ExchangeHeroSection';
import CryptoCard from '@/components/cards/CryptoCard';
import CryptoList from '@/components/crypto-list/CryptoList';
import Pagination from '@/components/Ui/Pagination';
import ArrowUp from '@/components/Ui/ArrowUp';

export default function ExchangePage({ currencyData }) {
  const {
    currentCurrencies,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  } = usePagination(currencyData);

  const topFiveCurrencies = currencyData.slice(0, 5);

  const cardsSectionRef = useRef(null);
  const listRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const c = gsap.utils.selector(cardsSectionRef);

  const cryptoCards = topFiveCurrencies.map((currency) => (
    <CryptoCard key={currency.id} currencyData={currency} />
  ));

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsSectionRef.current,
        scrub: 1,
        start: '-40% 80%',
        end: 'bottom 50%',
      },
    });

    tl.from(c('.card'), { x: 100, stagger: 0.25, duration: 1 });

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Next Crypto App | Exchange</title>
        <meta
          property="og:title"
          content="Information about cryptocurrency exchange"
          key="title"
        />
        <meta
          name="description"
          content="Your accurate cryptocurrency data chart"
        ></meta>
      </Head>
      <ExchangeHeroSection listRef={cardsSectionRef} />
      <h2 className="text-2xl text-center md:text-4xl lg:text-5xl pt-20 md:pt-40 lg:pt-64">
        Top 5 cryptocurrencies
      </h2>
      <section
        className="container mx-auto flex flex-wrap justify-center gap-20 md:gap-20 my-20 md:my-32 lg:my-52"
        ref={cardsSectionRef}
      >
        {cryptoCards}
      </section>
      <section className="mt-64" ref={listRef}>
        <h3 className="text-center text-4xl pb-20">Market</h3>
        <CryptoList currencyData={currentCurrencies} />

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
      </section>
      <div className="text-center py-20">
        <ArrowUp sectionRef={listRef} />
      </div>
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
