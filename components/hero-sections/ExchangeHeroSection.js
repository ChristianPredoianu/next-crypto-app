import Image from 'next/image';
import CryptoImg from '@/assets/images/crypto.jpg';
import ArrowDown from '@/components/Ui/ArrowDown';

export default function ExchangeHeroSection({ listRef }) {
  return (
    <section className="flex flex-col items-center md:flex md:flex-row md:items-stretch md:justify-around bg-black dark:bg-transparent text-gray-300 px-10 sm:px-0 sm:py-20 md:mt-10 dark:border-b dark:border-gray-200">
      <div className="py-10 sm:w-3/6 lg:w-4/12 xl:w-3/12">
        <h1 className="text-3xl sm:mx-8">
          Your trusted and secure
          <span className="text-purple-500">{` crypto `}</span>
          market data.
          <span className="inline-block text-lg">Powered by coingecko.com</span>
        </h1>
        <div className="text-4xl text-gray-300 dark:text-purple-600 mt-10 md:mt-20 lg:mt-32 text-center cursor-pointer">
          <ArrowDown sectionRef={listRef} />
        </div>
      </div>
      <div className="block w-full md:w-3/6 mt-16 md:mt-0">
        <Image
          src={CryptoImg}
          alt="crypto"
          layout="responsive"
          width={192}
          height={128}
          priority
        />
      </div>
    </section>
  );
}
