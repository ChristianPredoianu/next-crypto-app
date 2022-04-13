import Image from 'next/image';
import SocialMediaIcon from '@/components/Ui/SocialMediaIcon';
import BgImage from '../../assets/images/crypto-background.jpg';
import {
  faFacebook,
  faGithub,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function CurrencyInfoHeroSection({ currencyData }) {
  const {
    links: {
      facebook_username,
      homepage,
      repos_url: { github },
      subreddit_url,
    },
  } = currencyData;

  const icons = [
    {
      name: 'facebook',
      icon: faFacebook,
      url: `https://www.facebook.com/${facebook_username}`,
    },
    { name: 'homepage', icon: faHouse, url: homepage },
    {
      name: faGithub,
      icon: faGithub,
      url: github[0],
    },
    { name: 'reddit', icon: faReddit, url: subreddit_url },
  ];
  return (
    <section
      className="relative flex text-gray-200 min-h-75 bg-bottom bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container flex flex-col md:flex-row md:justify-around items-center mx-auto py-20">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 w-full h-full bg-slate-800 opacity-50"></div>
        <div className="relative z-20 py-10">
          <h1 className="text-3xl">{`Discover ${currencyData.name}`}</h1>
          <div className="flex justify-around items-center py-10 text-3xl text-white">
            {icons.map((icon) => (
              <SocialMediaIcon
                key={icon.name}
                icon={icon.icon}
                url={icon.url}
              />
            ))}
          </div>
          <button className="p-4 bg-indigo-900 rounded transition duration-150 hover:bg-indigo-800">
            About {currencyData.name}
          </button>
        </div>
        <div className="absolute md:relative z-20 -bottom-28 sm:-bottom-32 left-10 md:left-0 md:bottom-0 w-2/12 md:w-1/12 py-20 md:py-0">
          <Image
            src={currencyData.image.large}
            alt="crypto"
            layout="responsive"
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
    </section>
  );
}
