import { useRef } from 'react';
import CryptoInfoCard from '@/components/cards/CryptoInfoCard';
import CryptoInfoList from '@/components/crypto-info-list/CryptoInfoList';
import ArrowUp from '@/components/Ui/ArrowUp';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';

export default function CurrencyInfoPage({ currencyData }) {
  const topFiveCurrencies = currencyData.slice(0, 5);

  const heroSectionRef = useRef(null);
  const listRef = useRef(null);
  const cardsSectionRef = useRef(null);

  const c = gsap.utils.selector(cardsSectionRef);

  const cryptoCards = topFiveCurrencies.map((currency) => (
    <CryptoInfoCard key={currency.name} currency={currency} />
  ));

  useIsomorphicLayoutEffect(() => {
    const cardsAnimation = gsap.from(c('.cryptoInfoCard'), {
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
      <section
        className="container mx-auto px-4 py-16 md:py-32"
        ref={heroSectionRef}
      >
        <div className="w-2/4">
          <h1 className="text-4xl">
            Bitcoin and cryptocurrency for{' '}
            <span className="text-purple-500">beginners</span>
          </h1>
          <h2 className="mt-4">
            Get your information about the basics of cryprocurrencies from us.
            We take a deep dive into different cryptocurrencies so that you can
            be informed about them before you invest.
          </h2>
        </div>
      </section>
      <section
        className="container mx-auto flex flex-col md:flex-row items-center flex-wrap gap-y-10 md:gap-16 md:justify-around py-10 lg:py-24"
        ref={cardsSectionRef}
      >
        {cryptoCards}
      </section>
      <section className="container mx-auto py-10 lg:pt-64" ref={listRef}>
        <h3 className="text-center text-4xl pb-20">Currencies</h3>
        <CryptoInfoList currencyData={currencyData} />
        <div className="text-center py-20 lg:mt-36">
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
