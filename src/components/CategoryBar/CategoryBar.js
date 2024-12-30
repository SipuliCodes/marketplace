import CategoryBarItem from './CategoryBarItem';
import { categories } from '@/data/categories';

const CategoryBar = ({categoryValue, setCategory}) => {

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 hidden md:grid">
        {categories.map((category) => (
          <CategoryBarItem key={category.id} {...category} setCategory={setCategory} category={categoryValue} />
        ))}
      </div>
      <div className="md:hidden flex overflow-x-auto pb-2 flex-nowrap scrollbar-thin scrollbar-thumb-blue-800 dark:scrollbar-thumb-white scrollbar-track-white dark:scrollbar-track-black hover:scrollbar scrollbar-thumb-rounded-full">
        {categories.map((category) => (
          <CategoryBarItem key={category.id} {...category} setCategory={setCategory} category={categoryValue} />
        ))}
      </div>
    </>
  );

};

export default CategoryBar;
