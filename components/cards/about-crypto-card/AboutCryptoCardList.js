import AboutCryptoCardListItem from './AboutCryptoCardListItem';

export default function AboutCryptoCardList({ market }) {
  console.log(market);
  return (
    <ul className="flex flex-col gap-y-2 w-full">
      {market.map((coinMarket, index) => (
        <AboutCryptoCardListItem
          key={coinMarket.title}
          index={index}
          title={coinMarket.title}
          data={coinMarket.data}
        />
      ))}
    </ul>
  );
}