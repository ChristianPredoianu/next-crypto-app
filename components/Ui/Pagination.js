import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export default function Pagination({
  productsPerPage,
  totalProducts,
  currentPage,
  onPaginate,
  onPrevPage,
  onNextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const backArrow = currentPage !== 1 && (
    <a href="#!" onClick={onPrevPage}>
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
    </a>
  );

  const pages = pageNumbers.map((number) => (
    <a key={number} onClick={() => onPaginate(number)} href="#!">
      <li
        key={number}
        //Set the active page
        className={classNames('text-2xl m-2 py-2 px-3', {
          'bg-black text-white': currentPage === number,
        })}
      >
        {number}
      </li>
    </a>
  ));

  const forwardArrow = pageNumbers.at(-1) !== currentPage && (
    <a href="#!" onClick={() => onNextPage(pageNumbers)}>
      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </a>
  );
  return (
    <div className="flex justify-center">
      <ul className="flex items-center">
        {backArrow}
        {pages}
        {forwardArrow}
      </ul>
    </div>
  );
}
