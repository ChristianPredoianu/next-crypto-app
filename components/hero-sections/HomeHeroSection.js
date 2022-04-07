import { useRef } from 'react';
import Link from 'next/link';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import Image from 'next/image';
import WatchImg from '@/assets/images/watch.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HomeHeroSection({ cardsSection }) {
  const ctaContainer = useRef(null);

  const q = gsap.utils.selector(ctaContainer);
  const tl = gsap.timeline();

  function scrollToCardsSectionHandler() {
    window.scrollTo({
      top: cardsSection.current.offsetTop,
      behavior: 'smooth',
    });
  }

  useIsomorphicLayoutEffect(() => {
    tl.from(q('.hero-el'), { y: 100, opacity: 0, duration: 1, stagger: 0.5 });
  }, []);

  return (
    <section>
      <div
        className="flex flex-col items-center md:flex-row md:justify-around my-20 md:my-48 xl:my-64"
        ref={ctaContainer}
      >
        <div className="flex flex-col items-center">
          <h1 className="hero-el relative text-2xl md:text-4xl before:absolute before:-top-6 before:left-0 before:w-1/4 before:border-b-2 before:border-black before:z-10 dark:before:border-gray-200">
            We´re a digital
            <div>
              <span className="text-xl md:text-2xl ">info agency.</span>
            </div>
          </h1>
          <Link href="/exchange">
            <a className="hero-el w-full text-xl mt-4 p-4 text-center transition-translate duration-200 shadow-xl hover:translate-y-px border-2 border-black dark:border-gray-200 before:w-full">
              Get Started
            </a>
          </Link>
        </div>
        <div className="hero-el block w-24 mt-16 md:w-36 md:mt-0">
          <Image
            src={WatchImg}
            alt="watch"
            layout="responsive"
            width={197}
            height={311}
            priority
          />
        </div>
      </div>
      <div className="flex justify-center text-4xl cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={scrollToCardsSectionHandler}
        />
      </div>
    </section>
  );
}
