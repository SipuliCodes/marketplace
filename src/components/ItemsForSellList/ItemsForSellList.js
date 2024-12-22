import { useEffect, useState } from "react";
import ItemForSell from "./ItemForSell";

const ItemsForSellList = ({ category }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (category) => {
    const response = await fetch(
      `http://localhost:3000/api/products?category=${category}`
    );
    const data = await response.json();

    if (response.ok) {
      setProducts(data);
    } else {
      console.error(data.error);
    }
  }

  useEffect(() => {
    fetchProducts(category)
  }, [category])


  return (
    <>
      <div className="md:hidden mx-4 mt-2 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.product_id} {...product} />
        ))}
      </div>
      <div className="hidden md:grid lg:hidden mx-4 mt-2  grid-cols-3 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.product_id} {...product} />
        ))}
      </div>
      <div className="hidden lg:grid mx-4 mt-2  grid-cols-4 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.product_id} {...product} />
        ))}
      </div>
    </>
  );

}

export default ItemsForSellList;