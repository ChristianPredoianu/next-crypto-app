export default function useScrollToSection() {
  function scrollToSection(section) {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth',
    });
  }
  return [scrollToSection];
}
