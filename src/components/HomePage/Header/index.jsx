import React from "react";

export default () => {
  return (
    <div>
      <div
        data-aos="fade"
        className="header px-[20px] w-full h-auto py-[150px] flex items-center md:justify-end "
      >
        <div className="text-center header_text md:text-left md:w-[270px] lg:w-[370px] md:mr-[40px] lg:mr-[60px] xl:mr-[170px]">
          <div className="text-[30px] md:text-[50px] font-bold ">
            Finding Your Perfect Shoes
          </div>
          <div className="text-[20px] text-[#33333] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </div>
          <button className="w-[123px] h-[43px] bg-[#7971EA] rounded-md text-[#fff] header_btn mt-[30px]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};
