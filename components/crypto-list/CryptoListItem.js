import Image from 'next/image';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';

export default function CryptoListItem({
  currencyName,
  currencySymbol,
  currencyPrice,
  currencyImg,
  currencyChangePercent,
  currencyVolume,
  currencyMarketCap,
}) {
  const [currencyFormatter] = useCurrencyFormatter();

  return (
    <li className="flex justify-between items-center w-11/12 mx-auto px-4 py-2 shadow-lg shadow-gray-300 dark:bg-slate-900 dark:shadow-sm dark:shadow-gray-800">
      <div className="w-full">
        <Image
          src={currencyImg}
          alt="crypto"
          layout="fixed"
          width={30}
          height={30}
          priority
        />

        <div className="w-full">
          <p className="text-sm dark:text-purple-400">{currencyName}</p>
          <p className="text-sm">{currencySymbol}</p>
        </div>
      </div>
      <div className="w-full">
        <p>{currencyFormatter.format(currencyPrice)}</p>
        <p
          className={`md:hidden ${
            currencyChangePercent > 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {`${currencyChangePercent > 0 ? '+' : ''}${currencyChangePercent}`}
        </p>
      </div>
      <p
        className={`hidden w-full md:block ${
          currencyChangePercent > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {`${currencyChangePercent > 0 ? '+' : ''}${currencyChangePercent}`}
      </p>
      <p className="hidden w-full md:block ">
        {currencyFormatter.format(currencyVolume)}
      </p>
      <p className="hidden w-full md:block">
        {currencyFormatter.format(currencyMarketCap)}
      </p>
    </li>
  );
}
