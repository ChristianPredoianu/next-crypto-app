export default function AboutCryptoCardListItem({ title, data, index }) {
  let color;

  data[2] < 0 ? (color = 'text-red-500') : (color = 'text-green-500');

  return (
    <li className="border-b border-b-gray-500">
      <div className="px-2">
        <h4 className="text-xl">{title}</h4>
        <p className={`${index === 2 ? color : ''} py-2 text-lg`}>{data}</p>
      </div>
    </li>
  );
}
