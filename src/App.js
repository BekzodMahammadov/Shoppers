import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Catalogue from "./pages/Catalogue";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AboutCard from "./components/ShopPage/ShopAll/AboutCard";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/aboutCard" element={<AboutCard />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr className="mt-[100px]" />
      <Footer />
    </div>
  );
}

export default App;
