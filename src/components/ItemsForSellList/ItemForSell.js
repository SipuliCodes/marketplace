import Image from "next/image";

const ItemForSell = ({
  name,
  location,
  pics,
  price,
}) => {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 shadow-lg  transition-transform transform hover:scale-105 cursor-pointer">
      <Image
        src={pics[0]}
        width="100"
        height="100"
        className="w-full h-[240px] rounded-xl object-cover overflow-hidden"
        alt={name}
      />
      <p className="ml-2">{location}</p>
      <p className="ml-2 mb-2">
        {name} | price: {price}€
      </p>
    </div>
  );
};

export default ItemForSell;
