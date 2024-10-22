import React from "react";
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import TopProducts from "../components/TopProducts"
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <Hero/>

      {/* categories */}
      <Categories/>

      {/* top products */}
      <TopProducts/>

      <Cart/>
    </>
  );
};

export default Home;
