import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-full ">
      <div className="w-full  h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>Contact</p>
      </div>
      <div className="thankyou flex justify-center h-[400px] items-center">
        <div className="text-center">
          <div className="text-[73px] text-[#28A745] flex justify-center">
            <BsCheckCircleFill />
          </div>
          <div className="text-[72px]">Thank you!</div>
          <div className="text-[20px] text-[#8c92a0]">
            You order was successfuly completed.
          </div>
          <div className="mt-[40px]">
            <button
              onClick={() => {
                navigate("/shop");
              }}
              className="w-[160px] h-[43px] bg-[#7971EA] rounded about_add_card uppercase text-[#fff]"
            >
              Back To Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
