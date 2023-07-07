import React from "react";
import Header from "../../components/HomePage/Header";
import About from "../../components/HomePage/About";
import Collection from "../../components/HomePage/Collection";
import FeatureProduct from "../../components/HomePage/FeatureProduct";
import BigSale from "../../components/HomePage/BigSale";

export default () => {
  return (
    <div>
      <Header />
      <About />
      <hr />
      <Collection />
      <FeatureProduct />
      <BigSale />
    </div>
  );
};
