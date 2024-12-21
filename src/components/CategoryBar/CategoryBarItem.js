import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const CategoryBarItem = ({setCategory, icon, name, id}) => {
  const handleClick = () => {
    setCategory(id);
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-start items-center hover:bg-gray-300 dark:hover:bg-gray-800 pt-2"
    >
      <FontAwesomeIcon
        size="2x"
        className="text-blue-800 dark:text-white mx-8"
        icon={icon}
      />
      <p className="text-center">{name}</p>
    </button>
  );
};

export default CategoryBarItem;
