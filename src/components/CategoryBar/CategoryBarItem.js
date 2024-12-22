import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const CategoryBarItem = ({category, setCategory, icon, name, id}) => {
  const handleClick = () => {
    setCategory(id);
  }
  console.log(category)

  return (
    <button
      onClick={handleClick}
      className={
        category === id
          ? 'flex flex-col justify-start items-center bg-blue-800 dark:bg-zinc-800 pt-2'
          : 'flex flex-col justify-start items-center hover:bg-gray-300 dark:hover:bg-zinc-800 pt-2'
      }
    >
      <FontAwesomeIcon
        size="2x"
        className={
          category === id
            ? 'text-white mx-8'
            : 'text-blue-800 dark:text-white mx-8'
        }
        icon={icon}
      />
      <p
        className={
          category === id
            ? 'text-center text-white'
            : 'text-center'
        }
      >
        {name}
      </p>
    </button>
  );
};

export default CategoryBarItem;
