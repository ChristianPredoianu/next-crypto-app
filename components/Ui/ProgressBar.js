import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ProgressBar() {
  const router = useRouter();

  gsap.registerPlugin(ScrollTrigger);

  const max = 100;
  const value = 0;

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.refresh();

    const progressAnimation = gsap.to('progress', {
      clearProps: true,
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
      },
    });

    return () => {
      progressAnimation.scrollTrigger.kill();
    };
  }, [router.pathname]);

  return (
    <progress
      max={max}
      value={value}
      className="fixed bottom-0 left-0 w-full h-4 border-0 z-50"
    ></progress>
  );
}
