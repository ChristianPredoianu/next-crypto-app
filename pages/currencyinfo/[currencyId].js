import { useRef } from 'react';
import Image from 'next/image';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutCurrencyInfoHeroSection from '@/components/hero-sections/AboutCurrencyHeroSection';
import AboutCryptoCard from '@/components/cards/about-crypto-card/AboutCryptoCard';
import InfoImg from '@/assets/images/info.jpg';

export default function CurrencyDetails({ currencyData }) {
  gsap.registerPlugin(ScrollTrigger);

  const currencyDescription = currencyData.description.en.replace(
    /(<([^>]+)>)/gi,
    ''
  );

  const cardRef = useRef(null);
  const heroSectionRef = useRef(null);
  const aboutHeadingRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        scrub: 1,
        markers: true,
        start: 'top top',
        end: '190%',
      },
    });
    tl.from(cardRef.current, { y: 300, duration: 1 });
    tl.from(aboutHeadingRef.current, { x: 200, stagger: 3, opacity: 0 });

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <AboutCurrencyInfoHeroSection
        currencyData={currencyData}
        ref={heroSectionRef}
      />
      <section className="container mx-auto flex flex-col">
        <AboutCryptoCard currencyData={currencyData} ref={cardRef} />
        <p className="hidden sm:block text-gray-400 text-7xl text-center -mt-40 ml-72">
          Market
        </p>
      </section>
      <section className="container mx-auto flex py-40 md:py-64">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-3/6 md:w-2/6 pb-10 md:pb-0">
            <h3 className="text-center text-4xl pb-10 md:pb-0">
              {currencyData.name}
            </h3>
            <Image
              src={InfoImg}
              alt="information on devices"
              layout="responsive"
              width={192}
              height={144}
            />
          </div>
          <div className="w-11/12 md:w-7/12">
            <h5 className="text-xl py-4">Basic Information</h5>
            <h3 className="text-3xl pb-4" ref={aboutHeadingRef}>
              About {currencyData.name}
            </h3>
            <p>{currencyDescription}</p>
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
