import React from "react";

export default (props) => {
  return (
    <div>
      <div className="home_feature_card h-auto bg-[#fff] mx-auto w-[385px] md:w-[320px] lg:w-[290px] xl:w-[350px] mb-[20px]">
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
