import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function CryptoListMenu({ onSortData }) {
  return (
    <div className="w-11/12 mx-auto flex justify-around items-center pb-8">
      <p className="flex-1 md:w-1/5">Name</p>
      <div className="w-5/12 flex justify-center items-center md:justify-start md:w-1/5 text-center md:text-left">
        <p>Price</p>
        <div className="flex flex-col ml-2">
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={() => onSortData('current_price', 'ascending')}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => onSortData('current_price')}
          />
        </div>
      </div>
      <div className="hidden md:flex items-center w-5/12 md:w-1/5 text-center md:text-left">
        <p>24H Change</p>
        <div className="flex flex-col ml-2">
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={() => onSortData('price_change_24h', 'ascending')}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => onSortData('price_change_24h')}
          />
        </div>
      </div>
      <div className="hidden md:flex items-center w-5/12 md:w-1/5 text-center md:text-left">
        <p>Total Volume</p>
        <div className="flex flex-col ml-2">
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={() => onSortData('total_volume', 'ascending')}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => onSortData('total_volume')}
          />
        </div>
      </div>
      <div className="hidden md:flex items-center w-5/12 md:w-1/5 text-center md:text-left">
        <p>Market Cap</p>
        <div className="flex flex-col ml-2">
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={() => onSortData('market_cap', 'ascending')}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => onSortData('market_cap')}
          />
        </div>
      </div>
    </div>
  );
}
