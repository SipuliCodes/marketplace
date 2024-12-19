"use client";

import CategoryBar from "@/components/CategoryBar/CategoryBar";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    document.title = 'Any$ell | Home';
  }, []);
  return (
    <div>
      <CategoryBar />
    </div>
  );
}

export default Home;


