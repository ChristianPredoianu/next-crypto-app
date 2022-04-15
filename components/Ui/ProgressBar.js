import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ProgressBar() {
  gsap.registerPlugin(ScrollTrigger);

  const max = 100;
  const value = 0;

  useIsomorphicLayoutEffect(() => {
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <progress
      max={max}
      value={value}
      className="fixed bottom-0 left-0 w-full h-4 border-0 z-50"
    ></progress>
  );
}
