import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/crypto-info-list/CryptoInfoListItem.module.css';

export default function CryptoInfoListItem({
  id,
  symbol,
  name,
  img,
  activeListItem,
  setActiveItem,
}) {
  const nodeRef = useRef(null);

  function activeItemHandler(listItemId) {
    activeListItem === id ? setActiveItem(null) : setActiveItem(listItemId);
  }

  return (
    <li
      className={`p-4 ${
        activeListItem === id ? 'border-t border-b border-gray-600' : ''
      }`}
    >
      <div className="flex justify-between items-center py-4">
        <div className="flex">
          <Image src={img} alt="crypto" layout="fixed" width={30} height={30} />
          <p className="ml-4">
            {name}
            <span>{`(${symbol})`}</span>
          </p>
        </div>

        <div className="text-right text-xl cursor-pointer">
          <FontAwesomeIcon
            icon={activeListItem !== id ? faPlus : faMinus}
            onClick={() => activeItemHandler(id)}
          />
        </div>
      </div>

      <CSSTransition
        nodeRef={nodeRef}
        in={activeListItem === id}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: classes['fade-in-enter'],
          enterActive: classes['fade-in-enter-active'],
          exit: classes['fade-in-exit'],
          exitActive: classes['fade-in-exit-active'],
        }}
      >
        <div ref={nodeRef}>
          <p>
            More info about{' '}
            <Link href={`/currencyinfo/${id}`}>
              <a>{name}</a>
            </Link>
          </p>
        </div>
      </CSSTransition>
    </li>
  );
}
