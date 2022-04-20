import { memo } from 'react';
import Image from 'next/image';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';

export default memo(function CryptoListItem({ currency }) {
  const {
    name,
    symbol,
    current_price,
    image,
    price_change_percentage_24h,
    total_volume,
    market_cap,
  } = currency;

  const [currencyFormatter] = useCurrencyFormatter();

  return (
    <li className="flex justify-between items-center w-11/12 mx-auto px-4 py-2 shadow-lg shadow-gray-300 dark:bg-slate-900 dark:shadow-sm dark:shadow-gray-800">
      <div className="w-full">
        <Image
          src={image}
          alt="crypto"
          layout="fixed"
          width={30}
          height={30}
          priority
        />

        <div className="w-full">
          <p className="text-sm dark:text-purple-400">{name}</p>
          <p className="text-sm">{symbol}</p>
        </div>
      </div>
      <div className="w-full">
        <p>{currencyFormatter(current_price)}</p>
        <p
          className={`md:hidden ${
            price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {`${
            price_change_percentage_24h > 0 ? '+' : ''
          }${price_change_percentage_24h}`}
        </p>
      </div>
      <p
        className={`hidden w-full md:block ${
          price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {`${
          price_change_percentage_24h > 0 ? '+' : ''
        }${price_change_percentage_24h}`}
      </p>
      <p className="hidden w-full md:block ">
        {currencyFormatter(total_volume)}
      </p>
      <p className="hidden w-full md:block">{currencyFormatter(market_cap)}</p>
    </li>
  );
});
