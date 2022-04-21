import Image from 'next/image';
import useCurrencyGradient from '@/hooks/useCurrencyGradient';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';

export default function CryptoCard({ currencyData, cardRef }) {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap_rank,
    market_cap,
    total_volume,
    circulating_supply,
  } = currencyData;

  const [currencyFormatter] = useCurrencyFormatter();
  const [cardGradient] = useCurrencyGradient(name);

  return (
    <>
      <div
        className="card flex flex-col items-center sm:flex sm:flex-row"
        ref={cardRef}
      >
        <div
          className={`relative py-20 px-20 bg-gradient-to-b ${cardGradient} to-gray-200 shadow-lg shadow-gray-400 dark:shadow-sm sm:py-32`}
        >
          <p className="absolute bottom-2 right-2 text-4xl text-gray-600 opacity-60  ">
            {symbol.toUpperCase()}
          </p>
          <div className="absolute top-2 left-2 w-3/6 ">
            <Image
              src={image}
              alt="crypto"
              layout="responsive"
              width={107}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="w-full px-10 py-4 mt-6 font-extralight text-gray-900 dark:text-gray-300 shadow-lg shadow-gray-400 dark:shadow-sm dark:shadow-gray-600 sm:mt-0">
          <div className="py-2">
            <h2 className="text-2xl uppercase tracking-wider">{name}</h2>
            <p className="text-lg text-orange-400">{symbol}</p>
          </div>
          <div className="flex py-2">
            <h3 className="text-3xl">{`${currencyFormatter(
              current_price
            )}`}</h3>
            <p className="text-sm text-green-600 ml-1">{`Rank: ${market_cap_rank}`}</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`${currencyFormatter(market_cap)}`}</p>
            <p className="text-lg text-gray-500">Market Cap</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`${currencyFormatter(total_volume)}`}</p>
            <p className="text-lg text-gray-500">Volume</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`$${circulating_supply.toLocaleString(
              'en-us',
              {
                minimumFractionDigits: 2,
              }
            )}`}</p>
            <p className="text-lg text-gray-500">Circulating Supply</p>
          </div>
        </div>
      </div>
    </>
  );
}
