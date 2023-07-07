import React from "react";
import Begin from "../../components/AboutPage/Begin";
import Team from "../../components/AboutPage/Team";
import About from "../../components/HomePage/About";

export default () => {
  return (
    <div>
      <div className="w-full h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>About</p>
      </div>
      <Begin />
      <hr className="mt-[150px]" />
      <Team />
      <hr className="mt-[80px]" />
      <About />
    </div>
  );
};
