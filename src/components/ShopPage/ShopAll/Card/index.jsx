import React from "react";

export default (props) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="shop_shop_card h-auto border border-[#DEE2E6] bg-[#fff] mx-auto w-[385px] md:w-[238px] lg:w-[200px] xl:w-[240px] mb-[20px]"
      >
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="p-[24px] text-center">
          <div className="text-[20px] text-[#7971ea] font-semibold">
            {props.title}
          </div>
          <div className="text-[#8c92a0] text-[16px]">
            Finding perfect product
          </div>
          <div className="text-[16px] font-bold text-[#7971ea]">50 $</div>
        </div>
      </div>
    </div>
  );
};
