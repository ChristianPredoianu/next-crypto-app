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
    <li className="w-11/12 flex justify-around items-center border py-2 mx-auto border-black dark:border-gray-600">
      <div className="flex items-center ml-2 flex-1 md:w-1/5">
        <Image
          src={currencyImg}
          alt="crypto"
          layout="fixed"
          width={30}
          height={30}
          priority
        />
        <div className="flex-1 ml-2">
          <p className="dark:text-purple-500">{currencyName}</p>
          <p className="text-sm">{currencySymbol}</p>
        </div>
      </div>
      <div className="w-5/12 md:w-1/5 text-center md:text-left">
        <p className="">{currencyFormatter.format(currencyPrice)}</p>
        <p
          className={`md:hidden ${
            currencyChangePercent > 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {`${currencyChangePercent > 0 ? '+' : ''}${currencyChangePercent}`}
        </p>
      </div>
      <p
        className={`hidden md:block md:w-1/5 ${
          currencyChangePercent > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {`${currencyChangePercent > 0 ? '+' : ''}${currencyChangePercent}`}
      </p>
      <p className="hidden md:block md:w-1/5">
        {currencyFormatter.format(currencyVolume)}
      </p>
      <p className="hidden md:block md:w-1/5">
        {currencyFormatter.format(currencyMarketCap)}
      </p>
    </li>
  );
}
