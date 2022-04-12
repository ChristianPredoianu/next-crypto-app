import { useState } from 'react';
import CryptoInfoListItem from '@/components/crypto-info-list/CryptoInfoListItem';

export default function CryptoInfoList({ currencyData }) {
  const [activeListItem, setActiveListItem] = useState(null);

  return (
    <ul className="flex flex-col gap-y-6 px-4">
      {currencyData.map((currency) => (
        <CryptoInfoListItem
          key={currency.name}
          id={currency.id}
          symbol={currency.symbol}
          name={currency.name}
          img={currency.image}
          activeListItem={activeListItem}
          setActiveItem={setActiveListItem}
        />
      ))}
    </ul>
  );
}
