import CryptoListItem from './CryptoListItem';

export default function CryptoList({ currencyData }) {
  console.log(currencyData);
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-around pb-2">
        <p className="flex-1 md:w-1/5">Name</p>
        <p className="w-5/12 md:w-1/5 text-center md:text-left">Price</p>
        <p className="hidden md:block md:w-1/5">24H Change</p>
        <p className="hidden md:block md:w-1/5">24H Volume</p>
        <p className="hidden md:block md:w-1/5">Market Cap</p>
      </div>
      <div className="">
        <ul className="flex flex-col gap-4">
          {currencyData.map((currency) => (
            <CryptoListItem
              key={currency.id}
              currencyName={currency.name}
              currencySymbol={currency.symbol}
              currencyPrice={currency.current_price}
              currencyImg={currency.image}
              currencyChangePercent={currency.price_change_percentage_24h}
              currencyVolume={currency.total_volume}
              currencyMarketCap={currency.market_cap}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
