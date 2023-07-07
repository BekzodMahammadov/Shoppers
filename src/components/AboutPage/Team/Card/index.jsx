import React from "react";

export default ({ name, job, img }) => {
  return (
    <div>
      <div
        data-aos="fade"
        data-aos-duration="400"
        className="about_team_card w-[385px] md:w-[330px] lg:w-[210px] xl:w-[250px] mx-auto text-center mb-[30px]"
      >
        <div className="flex justify-center">
          <img src={img} className="w-[120px] rounded-full" alt="" />
        </div>
        <div className="text-[24px] mt-[10px]">{name}</div>
        <div className="text-[15px] text-[#b3b3b3]">{job}</div>
        <div className="text-[16px] text-[#8c92a0] mt-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
          minima nihil sit distinctio recusandae doloribus ut fugit officia
          voluptate soluta.
        </div>
      </div>
    </div>
  );
};
