import { useState } from 'react';
import CryptoListMenu from '@/components/crypto-list/CryptoListMenu';
import CryptoListItem from '@/components/crypto-list/CryptoListItem';

export default function CryptoList({ currencyData }) {
  const [dataToMap, setDataToMap] = useState(currencyData);
  const [activeArrow, setActiveArrow] = useState(null);

  function sortDataHandler(dataToSort, arrowId, order = null) {
    setActiveArrow(arrowId);

    const sortedData = [...currencyData].sort((a, b) =>
      order === 'ascending'
        ? b[dataToSort] - a[dataToSort]
        : a[dataToSort] - b[dataToSort]
    );

    setDataToMap(sortedData);
  }

  function resetInitialDataHandler() {
    setActiveArrow(null);
    setDataToMap(currencyData);
  }

  return (
    <>
      <CryptoListMenu
        activeArrow={activeArrow}
        onResetInitialData={resetInitialDataHandler}
        onSortData={sortDataHandler}
      />

      <ul className="flex flex-col gap-4">
        {dataToMap.map((currency) => (
          <CryptoListItem key={currency.id} currency={currency} />
        ))}
      </ul>
    </>
  );
}
