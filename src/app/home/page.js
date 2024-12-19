"use client";

import CategoryBar from "@/components/CategoryBar/CategoryBar";
import ItemsForSellList from "@/components/ItemsForSellList/ItemsForSellList";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    document.title = 'Any$ell | Home';
  }, []);
  return (
    <div>
      <CategoryBar />
      <ItemsForSellList />
    </div>
  );
}

export default Home;


