export default function useCurrencyGradient() {
  let cardGradient;

  function switchGradients(name) {
    switch (name) {
      case 'Bitcoin':
        cardGradient = 'from-orange-400';
        break;
      case 'Ethereum':
        cardGradient = 'from-purple-400';
        break;
      case 'Tether':
        cardGradient = 'from-green-400';
        break;
      case 'BNB':
        cardGradient = 'from-yellow-400';
        break;
      case 'USD Coin':
        cardGradient = 'from-blue-400';
        break;
    }

    return cardGradient;
  }
  return [switchGradients];
}
