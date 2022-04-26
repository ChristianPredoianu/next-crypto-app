import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export default function CryptoListMenuItem({ index, menuItems, activeArrow }) {
  const { name, arrowIdUp, arrowIdDown, sortDescending, sortAscending } =
    menuItems;

  return (
    <div
      className={`w-full ${index !== 0 && index !== 1 ? 'hidden' : ''} 
       md:block`}
    >
      <p>{name}</p>
      <div
        className={`flex flex-col w-full items-start ml-2 ${
          index === 0 ? 'hidden' : ''
        }`}
      >
        <FontAwesomeIcon
          icon={faCaretUp}
          className={classNames('cursor-pointer', {
            'text-green-500': arrowIdUp === activeArrow,
          })}
          onClick={() => sortAscending(arrowIdUp)}
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          className={classNames('cursor-pointer', {
            'text-green-500': arrowIdDown === activeArrow,
          })}
          onClick={() => sortDescending(arrowIdDown)}
        />
      </div>
    </div>
  );
}
