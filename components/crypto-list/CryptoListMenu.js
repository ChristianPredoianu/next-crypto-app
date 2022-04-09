import CryptoListMenuItem from '@/components/crypto-list/CryptoListMenuItem';

export default function CryptoListMenu({ isActive, onSortData }) {
  const menuItems = [
    { name: '' },
    {
      name: 'Price',
      sortAscending: function () {
        onSortData('current_price', 'ascending');
      },
      sortDescending: function () {
        onSortData('current_price');
      },
    },
    {
      name: '24H Change',
      sortAscending: function () {
        onSortData('price_change_24h', 'ascending');
      },
      sortDescending: function () {
        onSortData('price_change_24h');
      },
    },
    {
      name: 'Total Volume',
      sortAscending: function () {
        onSortData('total_volume', 'ascending');
      },
      sortDescending: function () {
        onSortData('total_volume');
      },
    },
    {
      name: 'Market Cap',
      sortAscending: function () {
        onSortData('market_cap', 'ascending');
      },
      sortDescending: function () {
        onSortData('market_cap');
      },
    },
  ];

  return (
    <div className="flex justify-end md:justify-around w-11/12 mx-auto py-4 bg-red-500">
      {menuItems.map((item, index) => (
        <CryptoListMenuItem
          key={item.name}
          index={index}
          name={item.name}
          onSortAscending={item.sortAscending}
          onSortDescending={item.sortDescending}
        />
      ))}
    </div>
  );
}
