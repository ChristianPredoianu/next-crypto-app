export default function useCurrencyFormatter() {
  function currencyFormatter(value) {
    const formatedNumber = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    }).format(value);
    return formatedNumber;
  }

  return [currencyFormatter];
}
