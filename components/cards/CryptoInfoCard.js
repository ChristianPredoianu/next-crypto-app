import Image from 'next/image';
import Link from 'next/link';
import useCurrencyGradient from '@/hooks/useCurrencyGradient';
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter';

export default function CryptoInfoCard({ name, id, symbol, img, price }) {
  const [cardGradient] = useCurrencyGradient(name);
  const [currencyFormatter] = useCurrencyFormatter();

  return (
    <div className="shadow-lg shadow-gray-500 dark:shadow-slate-800 w-2/3 sm:w-2/4 md:w-2/5 lg:w-min rounded-xl">
      <div
        className={`relative py-4 px-4 bg-gradient-to-b ${cardGradient} rounded-t-xl border-b border-gray-500`}
      >
        <Image
          src={img}
          alt="crypto"
          layout="fixed"
          width={30}
          height={30}
          priority
        />
        <h3 className="text-2xl uppercase tracking-wide">{name}</h3>

        <div className="absolute w-1/4 bottom-4 right-0 sm:-right-7">
          <Image
            src={img}
            alt="crypto"
            layout="responsive"
            width={80}
            height={80}
            priority
          />
        </div>
        <p className="text-4xl opacity-30">{symbol.toUpperCase()}</p>
      </div>
      <div className="relative py-20 bg-gray-200 dark:bg-black dark:border-b dark:border-gray-500 md:px-28">
        <h4 className="absolute w-2/4 bottom-4 -right-3 bg-green-500 rounded-sm p-2 text-right">
          {`${currencyFormatter.format(price)}`}
        </h4>
      </div>
      <div className="py-4 text-center text-gray-600 dark:text-gray-200">
        <Link href={`/currencyinfo/${id}`}>
          <button
            className={`bg-gradient-to-r ${cardGradient} text-center py-2 px-4 border border-gray-500`}
          >
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}
