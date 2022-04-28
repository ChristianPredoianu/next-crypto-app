import classNames from 'classnames';

export default function AboutCryptoCardListItem({ coinMarket, index }) {
  const { title, data } = coinMarket;

  let priceChangeColor;

  parseInt(data) < 0
    ? (priceChangeColor = 'text-red-500')
    : (priceChangeColor = 'text-clr-green-dark');

  return (
    <li className="border-b border-b-gray-500">
      <div className="px-2">
        <h4 className="text-xl">{title}</h4>
        <p
          className={classNames('py-2', 'text-lg', {
            [`${priceChangeColor}`]: index === 2,
          })}
        >
          {data}
        </p>
      </div>
    </li>
  );
}
