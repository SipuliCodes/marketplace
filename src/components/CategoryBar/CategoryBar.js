
import { faCar, faPaintBrush, faBicycle, faGamepad, faShirt, faTv, faWrench, faMobile, faLaptop, faPuzzlePiece, faUmbrella, faPlus } from '@fortawesome/free-solid-svg-icons';
import CategoryBarItem from './CategoryBarItem';

const CategoryBar = ({setCategory}) => {
  const categories = [
    { id: 'car', icon: faCar, name: 'Cars and accessories' },
    { id: 'art-tools', icon: faPaintBrush, name: 'Art tools and accessories' },
    { id: 'bike', icon: faBicycle, name: 'Bikes and accessories' },
    { id: 'gaming', icon: faGamepad, name: 'Gaming consoles and games' },
    { id: 'clothes', icon: faShirt, name: 'Clothes' },
    { id: 'tv', icon: faTv, name: 'Tvs and accessories' },
    { id: 'tools', icon: faWrench, name: 'Tools' },
    { id: 'phone', icon: faMobile, name: 'Phones and accessories' },
    { id: 'laptop', icon: faLaptop, name: 'Laptops and accessories' },
    { id: 'toys', icon: faPuzzlePiece, name: 'Toys' },
    { id: 'outdoor', icon: faUmbrella, name: 'Outdoor' },
    { id: 'others', icon: faPlus, name: 'Others' },
  ];

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 hidden md:grid">
        {categories.map((category) => (
          <CategoryBarItem key={category.id} {...category} setCategory={setCategory} />
        ))}
      </div>
      <div className="md:hidden flex overflow-x-auto pb-2 flex-nowrap scrollbar-thin scrollbar-thumb-blue-800 dark:scrollbar-thumb-white scrollbar-track-white dark:scrollbar-track-black hover:scrollbar scrollbar-thumb-rounded-full">
        {categories.map((category) => (
          <CategoryBarItem key={category.id} {...category} setCategory={setCategory} />
        ))}
      </div>
    </>
  );

};

export default CategoryBar;
