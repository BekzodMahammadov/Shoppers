import React from "react";
import Img from "../../../assets/images/blog_1.jpg";

export default () => {
  return (
    <div>
      <div className="about_begin mt-[100px]">
        <div className="about_begin_cont mt-[60px] grid grid-cols-1 md:grid-cols-2  md:px-[40px] lg:px-[70px] lg:grid-cols-2 xl:px-[120px]">
          <div className="mx-auto" data-aos="fade">
            <img
              src={Img}
              className="w-[385px] md:w-[692px] lg:w-[529px] xl:w-[600px] rounded-md"
              alt=""
            />
          </div>
          <div className="mx-auto  text-left w-[385px] md:w-[300px] lg:w-[437px] ">
            <div className="text-[32px]">How We Started</div>
            <div className="text-[16px] text-[#8c92a0] mt-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
              architecto cumque, deleniti commodi molestias repellendus quos
              sequi hic fugiat asperiores illum. Atque, in, fuga excepturi
              corrupti error corporis aliquam unde nostrum quas.
            </div>
            <div className="text-[16px] text-[#8c92a0] mt-[15px]">
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
