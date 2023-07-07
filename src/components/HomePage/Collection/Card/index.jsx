import React from "react";

export default (props) => {
  return (
    <div>
      <div
        className="home_collection_card w-[385px] md:w-[330px] lg:w-[290px] xl:w-[350px] mb-[20px] mx-auto"
        data-aos="fade"
        data-aos-duration={props.duration}
      >
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="mt-[-80px] absolute ml-[20px] home_collection_text">
          <div className="text-[12px] text-[#fff] font-bold uppercase z-10">
            Collections
          </div>
          <div className="text-[40px] text-[#fff] font-semibold z-10">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
};
