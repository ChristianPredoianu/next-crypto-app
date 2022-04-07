export default function useCurrencyFormatter() {
  const currencyFormatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

  return [currencyFormatter];
}
