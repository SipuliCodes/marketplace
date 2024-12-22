"use client";

import CategoryBar from "@/components/CategoryBar/CategoryBar";
import ItemsForSellList from "@/components/ItemsForSellList/ItemsForSellList";
import { useEffect, useState } from "react";


const Home = () => {
  const [category, setCategory] = useState("");
  
  useEffect(() => {
    document.title = 'Any$ell | Home';
  }, []);
  return (
    <div>
      <CategoryBar setCategory={setCategory} categoryValue={category} />
      <ItemsForSellList category={category} />
    </div>
  );
}

export default Home;


