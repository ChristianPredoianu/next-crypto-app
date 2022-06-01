import { useState } from 'react';

export function usePagination(data) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  let currentCurrencies;

  if (data) {
    currentCurrencies = data.slice(indexOfFirstPost, indexOfLastPost);
  }

  function paginationHandler(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function prevPageHandler() {
    if (currentPage !== 1) setCurrentPage((prevState) => (prevState -= 1));
  }

  function nextPageHandler(pageNumbers) {
    const lastPage = pageNumbers.length;

    if (currentPage !== lastPage)
      setCurrentPage((prevState) => (prevState += 1));
  }

  return {
    currentCurrencies,
    productsPerPage,
    currentPage,
    paginationHandler,
    prevPageHandler,
    nextPageHandler,
  };
}
