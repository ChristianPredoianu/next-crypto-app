import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialMediaIcon({ icon, url }) {
  return (
    <a
      href={url}
      target="blank"
      rel="noopener noreferrer"
      className="transition duration-100 hover:scale-110 hover:text-gray-400"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
