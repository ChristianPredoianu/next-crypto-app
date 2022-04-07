import Image from 'next/image';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';

export default function CryptoCard({
  currencyName,
  currencySymbol,
  currencyRank,
  currencyImg,
  currencyPrice,
  currencyMarketCap,
  currencyVolume,
  currencySupply,
}) {
  const [currencyFormatter] = useCurrencyFormatter();

  const cryptoCurrency = currencyName;
  let cardGradient;

  switch (cryptoCurrency) {
    case 'Bitcoin':
      cardGradient = 'from-orange-400';
      break;
    case 'Ethereum':
      cardGradient = 'from-purple-400';
      break;
    case 'Tether':
      cardGradient = 'from-green-400';
      break;
    case 'BNB':
      cardGradient = 'from-yellow-400';
      break;
    case 'USD Coin':
      cardGradient = 'from-blue-400';
  }

  return (
    <>
      <div className="flex flex-col items-center sm:flex sm:flex-row ">
        <div
          className={`relative py-20 px-20 bg-gradient-to-b ${cardGradient} to-gray-200 shadow-lg shadow-gray-400 dark:shadow-sm sm:py-32`}
        >
          <p className="absolute bottom-2 right-2 text-4xl text-gray-600 opacity-60  ">
            {currencySymbol.toUpperCase()}
          </p>
          <div className="absolute top-2 left-2 w-3/6 ">
            <Image
              src={currencyImg}
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
            <h2 className="text-2xl uppercase tracking-wider">
              {currencyName}
            </h2>
            <p className="text-lg text-orange-400">{currencySymbol}</p>
          </div>
          <div className="flex py-2">
            <h3 className="text-3xl">{`${currencyFormatter.format(
              currencyPrice
            )}`}</h3>
            <p className="text-sm text-green-600 ml-1">{`Rank: ${currencyRank}`}</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`${currencyFormatter.format(
              currencyMarketCap
            )}`}</p>
            <p className="text-lg text-gray-500">Market Cap</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`${currencyFormatter.format(
              currencyVolume
            )}`}</p>
            <p className="text-lg text-gray-500">Volume</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">{`$${currencySupply.toLocaleString(
              'en-us',
              { minimumFractionDigits: 2 }
            )}`}</p>
            <p className="text-lg text-gray-500">Circulating Supply</p>
          </div>
        </div>
      </div>
    </>
  );
}
