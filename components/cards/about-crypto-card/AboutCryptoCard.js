import { forwardRef } from 'react';
import Image from 'next/image';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';
import AboutCryptoCardList from '@/components/cards/about-crypto-card/AboutCryptoCardList';

export default forwardRef(function AboutCryptoCard(props, ref) {
  const { name, symbol, coingecko_rank, image, market_data } =
    props.currencyData;

  const [currencyFormatter] = useCurrencyFormatter();
  console.log(props.currencyData);

  const market = [
    { title: 'Rank:', data: coingecko_rank },
    {
      title: 'Price:',
      data: currencyFormatter(market_data.current_price.usd),
    },
    {
      title: 'Price Change:',
      data: `${market_data.price_change_percentage_24h} %`,
    },
    {
      title: 'Supply:',
      data: currencyFormatter(market_data.circulating_supply),
    },
    {
      title: 'Market Cap:',
      data: currencyFormatter(market_data.market_cap.usd),
    },
    {
      title: 'Volume:',
      data: currencyFormatter(market_data.total_volume.usd),
    },
  ];
  return (
    <div
      className="glass px-50 w-11/12 lg:w-7/12 xl:w-5/12 text-2xl mx-auto text-black dark:text-gray-200 -mt-14 dark:mt-4 py-8 bg-red-500"
      ref={ref}
    >
      <div className="flex justify-around items-center mt-8">
        <h2 className="text-3xl">{name}</h2>
        <Image
          src={image.large}
          alt="crypto"
          layout="fixed"
          width={80}
          height={80}
        />
      </div>
      <h4 className="text-center mt-2">{`(${symbol})`}</h4>
      <div className="flex justify-center py-4">
        <AboutCryptoCardList market={market} />
      </div>
    </div>
  );
});
