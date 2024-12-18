"use client";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = 'Any$ell | Home';
  }, []);
  return (
    <div></div>
  );
}

export default Home;


