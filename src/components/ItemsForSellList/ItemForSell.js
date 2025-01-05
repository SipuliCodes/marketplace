import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ItemForSell = ({ name, location, pics, price }) => {
  const [picNumber, setPicNumber] = useState(0);

  const handleChevronClick = (event) => {
    const clickedElement = event.target.closest('div');
    const clickedId = clickedElement.id;

    if (clickedId === 'left') {
      if (picNumber > 0) {
        setPicNumber(picNumber - 1);
      } else {
        setPicNumber(pics.length - 1);
      }
    }
    if (clickedId === 'right') {
      if (picNumber < pics.length - 1) {
        setPicNumber(picNumber + 1);
      } else {
        setPicNumber(0);
      }
    }
    if (clickedId === 'bottom') {
      setPicNumber(parseInt(event.target.dataset.number));
    }
  };
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 shadow-lg  transition-transform transform hover:scale-105 cursor-pointer group">
      <div className="w-full h-[240px] rounded-xl overflow-hidden relative noselect">
        <Image
          src={pics[picNumber]}
          width="100"
          height="100"
          className="w-full h-full object-cover"
          alt={name}
        />
        <div
          id="left"
          onClick={handleChevronClick}
          className="flex md:hidden md:group-hover:flex justify-center items-center absolute bg-white/50 hover:bg-white/100 dark:bg-black/50 dark:hover:bg-black/100 rounded-full w-8 h-8 absolute -translate-y-1/2 top-1/2 left-2"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-blue-800 dark:text-white"
            size="xl"
          />
        </div>
        <div
          id="right"
          onClick={handleChevronClick}
          className="flex md:hidden md:group-hover:flex justify-center items-center absolute bg-white/50 hover:bg-white/100 dark:bg-black/50 dark:hover:bg-black/100 rounded-full w-8 h-8 absolute -translate-y-1/2 top-1/2 right-2"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-blue-800 dark:text-white"
            size="xl"
          />
        </div>
        {pics.length != 0 && (
          <div className="flex w-full justify-center absolute bottom-2 space-x-1">
            {pics.map((_, index) => (
              <div
                id="bottom"
                data-number={index}
                onClick={handleChevronClick}
                key={index}
                className={`w-2 h-2 rounded-full border ${
                  picNumber !== index
                    ? 'bg-white hover:bg-gray-300 dark:hover:bg-zinc-700 dark:hover:border-zinc-700'
                    : 'bg-blue-800 dark:bg-zinc-800'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <p className="ml-2">{location}</p>
      <p className="ml-2 mb-2">
        {name} | price: {price}€
      </p>
    </div>
  );
};

export default ItemForSell;
