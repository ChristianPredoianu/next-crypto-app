import { useRef } from 'react';
import Image from 'next/image';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';
import AboutCryptoCardList from '@/components/cards/about-crypto-card/AboutCryptoCardList';

export default function AboutCryptoCard({
  name,
  symbol,
  rank,
  image,
  marketData,
}) {
  const [currencyFormatter] = useCurrencyFormatter();
  const cardRef = useRef(null);

  const market = [
    { title: 'Rank:', data: rank },
    {
      title: 'Price:',
      data: currencyFormatter.format(marketData.current_price.usd),
    },
    {
      title: 'Price Change:',
      data: `${marketData.price_change_percentage_24h} %`,
    },
    {
      title: 'Supply:',
      data: currencyFormatter.format(marketData.circulating_supply),
    },
    {
      title: 'Market Cap:',
      data: currencyFormatter.format(marketData.market_cap.usd),
    },
    {
      title: 'Volume:',
      data: currencyFormatter.format(marketData.total_volume.usd),
    },
  ];
  return (
    <div
      className="glass w-11/12 lg:w-7/12 xl:w-5/12 text-2xl mx-auto text-black dark:text-gray-200 -mt-14 dark:mt-4 py-8"
      ref={cardRef}
    >
      <div className="flex justify-around items-center mt-8">
        <h2 className="text-4xl">{name}</h2>
        <Image src={image} alt="crypto" layout="fixed" width={80} height={80} />
      </div>
      <h4 className="text-center mt-2">{`(${symbol})`}</h4>
      <div className="flex justify-center py-4">
        <AboutCryptoCardList market={market} />
      </div>
    </div>
  );
}
