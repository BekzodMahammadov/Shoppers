import React from "react";
import Img from "../../../assets/images/blog_1.jpg";

export default () => {
  return (
    <div>
      <div className="home_big_sale mt-[100px]">
        <div className="text-[32px] text-center ">Big Sale!</div>
        <div className="home_big_sale_cont mt-[60px] grid grid-cols-1 md:px-[40px] lg:px-[70px] lg:grid-cols-2 xl:px-[120px]">
          <div className="mx-auto">
            <img
              src={Img}
              className="w-[385px] md:w-[692px] lg:w-[529px] xl:w-[600px]"
              alt=""
            />
          </div>
          <div className="mx-auto  text-center w-[385px] md:w-[692px] lg:w-[337px] flex items-center">
            <div>
              <div className="text-[#7971ea]  text-[32px]">
                50% less in all items
              </div>
              <div className="text-[16px] text-[#c4c7ce] mt-[10px]">
                By Carl Smith • September 3, 2018
              </div>
              <div className="text-[#8c92a0] text-[16px] mt-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </div>
              <button className="w-[123px] h-[43px] bg-[#7971EA] rounded-md text-[#fff] header_btn mt-[30px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
