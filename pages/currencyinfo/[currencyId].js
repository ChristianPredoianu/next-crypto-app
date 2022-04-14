import Image from 'next/image';
import CurrencyInfoHeroSection from '@/components/hero-sections/AboutCurrencyHeroSection';
import AboutCryptoCard from '@/components/cards/about-crypto-card/AboutCryptoCard';
import InfoImg from '@/assets/images/info.jpg';

export default function CurrencyDetails({ currencyData }) {
  console.log(currencyData);

  return (
    <>
      <CurrencyInfoHeroSection
        name={currencyData.name}
        image={currencyData.image.large}
        links={currencyData.links}
      />
      <section className="relative container mx-auto flex flex-col">
        <AboutCryptoCard
          name={currencyData.name}
          symbol={currencyData.symbol}
          rank={currencyData.coingecko_rank}
          image={currencyData.image.large}
          marketData={currencyData.market_data}
        />
        <p className=" hidden md:block text-gray-400 text-7xl text-center -mt-40 ml-72">
          Market
        </p>
      </section>
      <section className="container mx-auto mt-64">
        <h3>About {currencyData.name}</h3>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="bg-red-500 w-2/5">
            <Image
              src={InfoImg}
              alt="information on devices"
              layout="responsive"
              width={192}
              height={144}
            />
          </div>
          <div className="w-full flex flex-col justify-end items-end">
            <h5>Basic Information</h5>
            <h3>{currencyData.name}</h3>
            <p>{currencyData.description.en}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const currencyData = await res.json();

  const paths = currencyData.map((currency) => ({
    params: { currencyId: currency.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    console.log(params);
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.currencyId}`
    );
    const currencyData = await res.json();

    return {
      props: { currencyData },
    };
  } catch (err) {
    console.log(error);
  }
}
