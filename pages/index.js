import { useRef } from 'react';
import Head from 'next/head';
import HomeHeroSection from '@/components/hero-sections/HomeHeroSection';
import HomeInfoCard from '@/components/cards/HomeInfoCard';
import { infoCardData } from 'utils/infoCardContent';

export default function Home() {
  const cardsSection = useRef(null);

  return (
    <>
      <Head>
        <title>Next Crypto App</title>
      </Head>
      <HomeHeroSection cardsSection={cardsSection} />
      <section
        className="flex flex-col items-center md:flex-row md:justify-around md:items-stretch gap-y-4 md:gap-y-0 py-40"
        ref={cardsSection}
      >
        {infoCardData.map((cardData) => (
          <HomeInfoCard
            key={cardData.title}
            title={cardData.title}
            content={cardData.content}
          />
        ))}
      </section>
    </>
  );
}
