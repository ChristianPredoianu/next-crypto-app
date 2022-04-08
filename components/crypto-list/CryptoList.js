import { useState, useEffect } from 'react';
import CryptoListMenu from '@/components/crypto-list/CryptoListMenu';
import CryptoListItem from '@/components/crypto-list/CryptoListItem';

export default function CryptoList({ currencyData }) {
  let [dataToMap, setDataToMap] = useState(currencyData);
  let [sortType, setSortType] = useState(null);

  function sortDataHandler(dataToSort, order = null) {
    setSortType(order);

    const sortedData = currencyData.sort((a, b) =>
      order === 'ascending'
        ? b[dataToSort] - a[dataToSort]
        : a[dataToSort] - b[dataToSort]
    );

    setDataToMap(sortedData);
  }

  return (
    <>
      <CryptoListMenu onSortData={sortDataHandler} />
      <div className="flex w-11/12 items-center mx-auto bg-red-500"></div>
      <div className="">
        <ul className="flex flex-col gap-4">
          {dataToMap.map((currency) => (
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
