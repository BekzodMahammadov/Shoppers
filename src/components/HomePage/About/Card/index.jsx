import React from "react";

export default (props) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={props.duration}
        className="home_about_card w-[385px] md:w-[321px] gap-[20px] lg:w-[319px] xl:w-[350px] lg:flex mx-auto mb-[30px]"
      >
        <div className="text-[50px] text-[#7971EA]">{props.icon}</div>
        <div>
          <div className="text-[18px]">{props.title}</div>
          <div className="text-[16px] text-[#8c92a0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </div>
        </div>
      </div>
    </div>
  );
};
