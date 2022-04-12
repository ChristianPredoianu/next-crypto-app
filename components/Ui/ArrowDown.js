import useScrollToSection from '@/hooks/useScrollToSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function ArrowDown({ sectionRef }) {
  const [scrollToSection] = useScrollToSection();

  function scrollToSectionHandler(sectionRef) {
    scrollToSection(sectionRef);
  }
  return (
    <FontAwesomeIcon
      icon={faArrowDown}
      className="py-2 px-3 rounded-full border border-purple-600 animate-bounce"
      onClick={() => scrollToSectionHandler(sectionRef)}
    />
  );
}
