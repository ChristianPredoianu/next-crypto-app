import useScrollToSection from '@/hooks/useScrollToSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ArrowUp({ sectionRef }) {
  const [scrollToSection] = useScrollToSection();

  function scrollToSectionHandler(sectionRef) {
    scrollToSection(sectionRef);
  }
  return (
    <FontAwesomeIcon
      icon={faArrowUp}
      className="text-4xl animate-bounce cursor-pointer"
      onClick={() => scrollToSection(sectionRef)}
    />
  );
}
