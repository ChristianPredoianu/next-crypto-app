export default function useCurrencyGradient(currencyName) {
  let cardGradient;

  switch (currencyName) {
    case 'Bitcoin':
      cardGradient = 'from-orange-400';
      break;
    case 'Ethereum':
      cardGradient = 'from-purple-400';
      break;

    case 'Tether':
      cardGradient = 'bg-green-400';
      break;
    case 'BNB':
      cardGradient = 'bg-yellow-400';
      break;
    case 'USD Coin':
      cardGradient = 'from-blue-400';
      break;
  }
  return [cardGradient];
}
