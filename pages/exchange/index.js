import Image from 'next/image';
import CryptoImg from '@/assets/images/crypto.jpg';
import CryptoCard from '@/components/cards/CryptoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function ExchangePage({ currencyData }) {
  const topFiveCurrencies = currencyData.slice(0, 5);
  console.log(topFiveCurrencies);

  return (
    <>
      <section className="flex flex-col items-center md:flex md:flex-row md:items-stretch md:justify-around bg-black dark:bg-transparent px-10 sm:px-0 sm:py-20 md:mt-10">
        <div className="py-10 sm:w-3/6 lg:w-4/12 xl:w-3/12">
          <h1 className="text-3xl text-gray-300 sm:mx-8">
            Your trusted and secure
            <span className="text-purple-500">{` crypto `}</span>
            market data.
          </h1>
          <div className="text-4xl text-gray-300 dark:text-purple-600 mt-10 md:mt-20 lg:mt-32 text-center cursor-pointer">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div className="block w-full md:w-3/6 mt-16 md:mt-0">
          <Image
            src={CryptoImg}
            alt="crypto"
            layout="responsive"
            width={192}
            height={128}
            priority
          />
        </div>
      </section>
      <h2 className="text-2xl text-center md:text-4xl lg:text-5xl pt-20 md:pt-40 lg:pt-64">
        Top 5 cryptocurrencies
      </h2>
      <section className="flex flex-wrap justify-center gap-20 md:gap-20 my-20 md:my-32 lg:my-52">
        {/*  <CryptoCard /> */}
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
