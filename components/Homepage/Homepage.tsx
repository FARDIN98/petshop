import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Mall from "./Mall";
import ShopByPet from "./ShopByPet";
import Stories from "./Stories";
import Adoption from "./Adoption";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Mall />
      <ShopByPet />
      <Stories />
      <Adoption />
    </div>
  );
};

export default Homepage;
