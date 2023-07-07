import React from "react";
import ShopAll from "../../components/ShopPage/ShopAll";
import Collection from "../../components/HomePage/Collection";

export default () => {
  return (
    <div>
      <div className="w-full h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>Shop</p>
      </div>
      <ShopAll />
      <div>
        <div className="text-[32px] text-center mt-[150px]">Categories</div>
        <Collection />
      </div>
    </div>
  );
};
