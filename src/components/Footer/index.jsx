import React from "react";
import Img from "../../assets/images/hero_1.jpg";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { BsFillHeartFill } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="footer mt-[70px]">
        <div className="footer_top w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] lg:px-[70px] md:px-[40px] xl:px-[110px]">
          <div className="footer_item mx-auto md:w-[700px] xl:w-[530px] mb-[30px] flex flex-col gap-[25px]">
            <div className="text-[20px] text-[#25262a] font-medium">
              Navigations
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[385px] md:w-[420px]">
              <div className="flex flex-col  gap-[10px]">
                <a href="#">Sell online</a>
                <a href="#">Features</a>
                <a href="#">Shopping cart</a>
                <a href="#">Store builder</a>
              </div>
              <div className="flex flex-col  gap-[10px]">
                <a href="#">Mobile commerce</a>
                <a href="#">Dropshipping</a>
                <a href="#">Website development</a>
              </div>
              <div className="flex flex-col  gap-[10px]">
                <a href="#">Point of sale</a>
                <a href="#">Hardware</a>
                <a href="#">Software</a>
              </div>
            </div>
          </div>
          <div className="footer_item md:ml-[50px] lg:ml-[100px]  xl:w-[250px] mx-auto wi-[] mb-[30px] flex flex-col gap-[25px]">
            <div className="text-[20px] text-[#25262a] font-medium">Promo</div>
            <div>
              <div>
                <img
                  src={Img}
                  className="rounded-md w-[385px] md:w-[285px] lg:w-[210px] xl:w-[240px]"
                  alt=""
                />
              </div>
              <div className="text-[18px] text-[#7971EA] cursor-pointer">
                Finding Your Perfect Shoes
              </div>
              <div>
                <a href="#">Promo from nuary 15 — 25, 2019</a>
              </div>
            </div>
          </div>
          <div className="footer_item lg:ml-[50px] xl:ml-[80px] mx-auto xl:w-[250px]  mb-[30px] flex flex-col gap-[25px]">
            <div className="text-[20px] text-[#25262a] font-medium">
              Contact Info
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex  gap-[10px]">
                <span>
                  <MdLocationOn />
                </span>{" "}
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
              <div className="flex  gap-[10px]">
                <span>
                  <IoMdCall />
                </span>{" "}
                +2 392 3929 210
              </div>
              <div className="flex  gap-[10px]">
                <span>
                  <GrMail />
                </span>{" "}
                emailaddress@domain.com
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[20px]">Subscribe</div>
              <div>
                <input
                  type="text"
                  className="w-[385px] py-[24px] px-[12px] h-[50px] outline-none md:w-[330px] lg:w-[210px] xl:w-[250px] border rounded-md"
                  name=""
                  id=""
                  placeholder="Email "
                />
                <button className="w-[80px] ml-[-85px] h-[43px] bg-[#7971EA] rounded-md uppercase text-[#fff]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[16px] text-center text-[#8c92a0]  py-[40px] px-[20px]">
          Copyright ©2023 All rights reserved | This template is made with by 💜
          Colorlib
        </div>
      </div>
    </div>
  );
};
