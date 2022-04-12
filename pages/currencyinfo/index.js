import { useRef } from 'react';
import CryptoInfoCard from '@/components/cards/CryptoInfoCard';
import CryptoInfoList from '@/components/crypto-info-list/CryptoInfoList';
import ArrowUp from '@/components/Ui/ArrowUp';

export default function CurrencyInfoPage({ currencyData }) {
  const topFiveCurrencies = currencyData.slice(0, 5);
  const listRef = useRef(null);

  return (
    <>
      <section className="px-2 py-16 md:py-32 md:w-2/4">
        <h1 className="text-2xl">
          Bitcoin and cryptocurrency for{' '}
          <span className="text-purple-500">beginners</span>
        </h1>
        <h2 className="mt-4">
          Get your information about the basics of cryprocurrencies from us. We
          take a deep dive into different cryptocurrencies so that you can be
          informed about them before you invest.
        </h2>
      </section>
      <section
        className="flex flex-col md:flex-row items-center flex-wrap gap-y-10 md:gap-16 md:justify-around py-10 lg:py-24"
        ref={listRef}
      >
        {topFiveCurrencies.map((card) => (
          <CryptoInfoCard
            key={card.name}
            name={card.name}
            symbol={card.symbol}
            img={card.image}
            price={card.current_price}
          />
        ))}
      </section>
      <section className="mx-auto py-10 lg:py-20 lg:w-3/4">
        <CryptoInfoList currencyData={currencyData} />
        <div className="text-center py-10 lg:py-20">
          <ArrowUp sectionRef={listRef} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const currencyData = await res.json();

    return {
      props: { currencyData },
    };
  } catch (err) {
    console.log(error);
  }
}
