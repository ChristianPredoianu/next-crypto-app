import { useState } from 'react';
import CryptoInfoListItem from '@/components/crypto-info-list/CryptoInfoListItem';

export default function CryptoInfoList({ currencyData }) {
  const [activeListItem, setActiveListItem] = useState(null);

  function activeItem(listItemId) {
    setActiveListItem(listItemId);
  }

  const cryptoInfoListItem = currencyData.map((currency) => (
    <CryptoInfoListItem
      key={currency.name}
      id={currency.id}
      symbol={currency.symbol}
      name={currency.name}
      img={currency.image}
      activeListItem={activeListItem}
      onActiveItemHandler={activeItem}
    />
  ));

  return (
    <ul className="flex flex-col px-6 py-16 rounded-3xl shadow-2xl dark:shadow-sm  shadow-gray-500 dark:shadow-gray-200">
      {cryptoInfoListItem}
    </ul>
  );
}
