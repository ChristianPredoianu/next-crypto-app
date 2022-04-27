import { forwardRef } from 'react';
import Image from 'next/image';
import SocialMediaIcon from '@/components/Ui/SocialMediaIcon';
import BgImage from '@/assets/images/crypto-background.jpg';

import {
  faFacebook,
  faGithub,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default forwardRef(function CurrencyInfoHeroSection(props, ref) {
  const { name, image, links } = props.currencyData;

  const icons = [
    {
      name: 'facebook',
      icon: faFacebook,
      url: `https://www.facebook.com/${links.facebook_username}`,
    },
    { name: 'homepage', icon: faHouse, url: links.homepage },
    {
      name: faGithub,
      icon: faGithub,
      url: links.repos_url.github[0],
    },
    { name: 'reddit', icon: faReddit, url: links.subreddit_url },
  ];

  const socialMediaIcons = icons.map((icon) => (
    <SocialMediaIcon key={icon.name} icon={icon.icon} url={icon.url} />
  ));

  return (
    <>
      <section
        className="relative flex text-gray-200 py-20 bg-bottom bg-no-repeat bg-cover"
        ref={ref}
      >
        <Image
          layout="fill"
          src={BgImage}
          objectFit="cover"
          objectPosition="bottom"
        ></Image>
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-around items-center py-20">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 w-full h-full bg-slate-800 dark:bg-clr-dark-theme opacity-30 dark:opacity-70"></div>
          <div className="relative z-20 py-10">
            {<h1 className="text-4xl">{`Discover ${name}`}</h1>}
            <div className="flex justify-around items-center py-10 text-3xl text-white">
              {socialMediaIcons}
            </div>
            <button
              className="p-4 glass-btn rounded transition duration-150 hover:bg-indigo-800"
              onClick={props.onScrollToAboutSection}
            >
              About {name}
            </button>
          </div>
          <div className="absolute md:relative -bottom-8 right-6 z-20 w-2/12 md:w-1/12 py-20 md:py-0">
            <Image
              src={image.large}
              alt="crypto logo"
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
    </>
  );
});
