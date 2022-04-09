import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function CryptoListMenuItem({
  name,
  index,
  onSortAscending,
  onSortDescending,
}) {
  return (
    <div
      className={`flex items-center bg-blue-500 ${
        index !== 1 ? 'hidden' : ''
      } ${index !== 0 ? 'md:block' : 'visible'}  ${
        index === 0 ? ' md:block md:invisible' : ''
      }`}
    >
      <p>{name}</p>
      <div className="flex flex-col ml-2">
        <FontAwesomeIcon
          icon={faCaretUp}
          className="cursor-pointer"
          onClick={onSortAscending}
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          className="cursor-pointer"
          onClick={onSortDescending}
        />
      </div>
    </div>
  );
}
