import { useRef } from 'react';
import ExchangeHeroSection from '@/components/hero-sections/ExchangeHeroSection';
import CryptoCard from '@/components/cards/CryptoCard';
import CryptoList from '@/components/crypto-list/CryptoList';
import ArrowUp from '@/components/Ui/ArrowUp';

export default function ExchangePage({ currencyData }) {
  const topFiveCurrencies = currencyData.slice(0, 5);

  const cardsSectionRef = useRef(null);
  const listRef = useRef(null);

  return (
    <>
      <ExchangeHeroSection listRef={cardsSectionRef} />
      <h2
        className="text-2xl text-center md:text-4xl lg:text-5xl pt-20 md:pt-40 lg:pt-64"
        ref={cardsSectionRef}
      >
        Top 5 cryptocurrencies
      </h2>
      <section className="flex flex-wrap justify-center gap-20 md:gap-20 my-20 md:my-32 lg:my-52">
        {topFiveCurrencies.map((currency) => (
          <CryptoCard
            key={currency.id}
            currencyName={currency.name}
            currencySymbol={currency.symbol}
            currencyRank={currency.market_cap_rank}
            currencyImg={currency.image}
            currencyPrice={currency.current_price}
            currencyMarketCap={currency.market_cap}
            currencyVolume={currency.total_volume}
            currencySupply={currency.circulating_supply}
          />
        ))}
      </section>
      <section className="py-20" ref={listRef}>
        <CryptoList currencyData={currencyData} />
      </section>
      <div className="text-center">
        <ArrowUp sectionRef={listRef} />
      </div>
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
