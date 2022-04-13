import CurrencyInfoHeroSection from '@/components/hero-sections/CurrencyInfoHeroSection';

export default function CurrencyDetails({ currencyData }) {
  console.log(currencyData);

  return (
    <>
      <CurrencyInfoHeroSection currencyData={currencyData} />
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
