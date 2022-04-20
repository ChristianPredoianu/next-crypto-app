import CryptoListMenuItem from '@/components/crypto-list/CryptoListMenuItem';

export default function CryptoListMenu({
  activeArrow,
  onResetInitialData,
  onSortData,
}) {
  const menuItemsArray = [
    { name: 'Name', reset: 'Reset' },
    {
      name: 'Price',
      arrowIdUp: 1,
      arrowIdDown: 2,
      sortAscending: function (arrowId) {
        onSortData('current_price', arrowId, 'ascending');
      },
      sortDescending: function (arrowId) {
        onSortData('current_price', arrowId);
      },
    },
    {
      name: '24H Change',
      arrowIdUp: 3,
      arrowIdDown: 4,
      sortAscending: function (arrowId) {
        onSortData('price_change_percentage_24h', arrowId, 'ascending');
      },
      sortDescending: function (arrowId) {
        onSortData('price_change_percentage_24h', arrowId);
      },
    },
    {
      name: 'Total Volume',
      arrowIdUp: 5,
      arrowIdDown: 6,
      sortAscending: function (arrowId) {
        onSortData('total_volume', arrowId, 'ascending');
      },
      sortDescending: function (arrowId) {
        onSortData('total_volume', arrowId);
      },
    },
    {
      name: 'Market Cap',
      arrowIdUp: 7,
      arrowIdDown: 8,
      sortAscending: function (arrowId) {
        onSortData('market_cap', arrowId, 'ascending');
      },
      sortDescending: function (arrowId) {
        onSortData('market_cap', arrowId);
      },
    },
  ];

  const menuItems = menuItemsArray.map((item, index) => (
    <CryptoListMenuItem
      key={item.name}
      index={index}
      menuItems={item}
      activeArrow={activeArrow}
    />
  ));
  return (
    <>
      <div className="flex justify-end items-stretch md:justify-between w-11/12 mx-auto px-4 ">
        {menuItems}
      </div>
      <div className="w-11/12 pb-3 px-4 mx-auto">
        <button
          className="bg-green-500 dark:bg-green-800 py-1 px-2 rounded"
          onClick={onResetInitialData}
        >
          Reset
        </button>
      </div>
    </>
  );
}
