import Image from 'next/image';
import CryptoImg from '@/assets/images/crypto.jpg';
import CryptoCard from '@/components/cards/CryptoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function ExchangePage() {
  return (
    <>
      <section className="flex flex-col items-center bg-black dark:bg-transparent px-10 sm:py-20 sm:px-0 md:flex md:flex-row md:items-stretch md:justify-around md:mt-10">
        <div className="py-10 sm:w-3/6 lg:w-4/12 xl:w-3/12">
          <h1 className="text-3xl text-gray-300 sm:mx-8">
            Your trusted and secure crypto market data.
          </h1>
          <div className="text-4xl text-gray-300 text-center mt-10 cursor-pointer md:mt-20 lg:mt-32 dark:text-purple-500">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div className="block mt-16 w-full md:w-3/6 md:mt-0 ">
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
      <section className="my-20 flex flex-col  ">
        <CryptoCard />
      </section>
    </>
  );
}
