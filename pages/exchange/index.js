import { useRef } from 'react';
import ExchangeHeroSection from '@/components/hero-sections/ExchangeHeroSection';
import CryptoCard from '@/components/cards/CryptoCard';
import CryptoList from '@/components/crypto-list/CryptoList';
import ArrowUp from '@/components/Ui/ArrowUp';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ExchangePage({ currencyData }) {
  const topFiveCurrencies = currencyData.slice(0, 5);

  const cardsSectionRef = useRef(null);
  const cardRef = useRef(null);
  const listRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const c = gsap.utils.selector(cardsSectionRef);

  const cryptoCards = topFiveCurrencies.map((currency) => (
    <CryptoCard key={currency.id} currencyData={currency} cardRef={cardRef} />
  ));

  useIsomorphicLayoutEffect(() => {
    const cardsAnimation = gsap.from(c('.card'), {
      x: 100,
      stagger: 0.25,
      duration: 1,
      scrollTrigger: {
        trigger: cardsSectionRef.current,
        scrub: 1,
        start: '-40% 80%',
        end: 'bottom 50%',
      },
    });

    return () => {
      cardsAnimation.scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <ExchangeHeroSection listRef={cardsSectionRef} />
      <h2 className="text-2xl text-center md:text-4xl lg:text-5xl pt-20 md:pt-40 lg:pt-64">
        Top 5 cryptocurrencies
      </h2>
      <section
        className="container mx-auto flex flex-wrap justify-center gap-20 md:gap-20 my-20 md:my-32 lg:my-52"
        ref={cardsSectionRef}
      >
        {cryptoCards}
      </section>
      <section className="mt-64">
        <h3 className="text-center text-4xl pb-20">Market</h3>
        <CryptoList currencyData={currencyData} />
      </section>
      <div className="text-center pt-20">
        <ArrowUp sectionRef={listRefs} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const currencyData = await res.json();

    return {
      props: { currencyData },
    };
  } catch (err) {
    console.log(error);
  }
}
