import Image from 'next/image';
import BitcoinImg from '@/assets/images/bitcoin.png';

export default function CryptoCard() {
  return (
    <>
      <div className="flex flex-col items-center sm:flex sm:flex-row ">
        <div className="relative py-20 px-20 bg-gradient-to-b from-orange-500 to-gray-200 shadow-lg shadow-gray-400 sm:py-32">
          <p className="absolute bottom-6 -right-4 rotate-90 text-4xl text-gray-600 opacity-60 tracking-widest ">
            BTC
          </p>
          <div className="absolute top-2 left-2 w-3/6 ">
            <Image
              src={BitcoinImg}
              alt="crypto"
              layout="responsive"
              width={107}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="font-extralight mt-8 text-gray-900 px-10 shadow-lg shadow-gray-400 border border-gray-200 sm:mt-0">
          <div className="py-2">
            <h2 className="text-2xl uppercase tracking-wider">Bitcoin</h2>
            <p className="text-md text-orange-400">BTC</p>
          </div>
          <div className="flex py-2">
            <h3 className="text-4xl">$9521512</h3>
            <p className="text-md text-green-400 ml-2">1.6%</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">1561561651</p>
            <p className="text-md text-gray-500">Market Cap</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">1561561651</p>
            <p className="text-xs text-gray-500">Volume</p>
          </div>
          <div className="py-2">
            <p className="text-2xl">1561561651</p>
            <p className="text-xs text-gray-500">Circulating Supply</p>
          </div>
        </div>
      </div>
    </>
  );
}
