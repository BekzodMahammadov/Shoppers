import React from "react";
import Latest from "./Dropdown/Latest";
import Reference from "./Dropdown/Reference";
import Img1 from "../../../assets/images/cloth_1.jpg";
import Img2 from "../../../assets/images/shoe_1.jpg";
import Img3 from "../../../assets/images/cloth_2.jpg";
import Img4 from "../../../assets/images/cloth_3.jpg";
import Card from "./Card";

import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Tank Top",
    img: Img1,
  },
  {
    id: 2,
    title: "Corater",
    img: Img2,
  },
  {
    id: 3,
    title: "Polo Shirt",
    img: Img3,
  },
  {
    id: 4,
    title: "T-Shirt Mockup",
    img: Img4,
  },
  {
    id: 5,
    title: "Corater",
    img: Img2,
  },
  {
    id: 6,
    title: "Tank Top",
    img: Img1,
  },
  {
    id: 7,
    title: "Corater",
    img: Img2,
  },
  {
    id: 8,
    title: "Polo Shirt",
    img: Img3,
  },
  {
    id: 9,
    title: "Polo Shirt",
    img: Img3,
  },
  {
    id: 10,
    title: "T-Shirt Mockup",
    img: Img4,
  },
  {
    id: 11,
    title: "Corater",
    img: Img2,
  },
  {
    id: 12,
    title: "Tank Top",
    img: Img4,
  },
];

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop_shop_all mt-[50px] px-[20px] md:px-[40px] lg:px-[60px]  md:flex md:justify-between xl:px-[120px]">
        <div className="shop_shop_item w-[30%]  ">
          <div className="w-[385px] h-auto flex flex-col gap-[20px] p-[24px] md:w-[170px] lg:w-[210px] xl:w-[240px] pb-[20px] rounded border border-[#DEE2E6]">
            <div className="text-[16px] uppercase font-medium">categories</div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex justify-between text-[16px] items-center">
                <a href="#" className="text-[#7971EA]">
                  Men
                </a>
                <p className="text-end">(2,220)</p>
              </div>
              <div className="flex justify-between text-[16px]">
                <a href="#" className="text-[#7971EA]">
                  Women
                </a>
                <p className="text-end">(2,550)</p>
              </div>
              <div className="flex justify-between text-[16px]">
                <a href="#" className="text-[#7971EA]">
                  Children
                </a>
                <p className="text-end">(2,124)</p>
              </div>
            </div>
          </div>
          <div className="w-[385px] mt-[20px] h-auto flex flex-col gap-[20px] p-[24px] md:w-[170px] lg:w-[210px] xl:w-[240px] pb-[20px] rounded border border-[#DEE2E6]">
            <div className="flex flex-col gap-[20px]">
              <div className="text-[16px] font-medium">FILTER BY PRICE</div>
              <div className=" ">75$ - 300$</div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[16px] uppercase font-medium">Size</div>
              <div>
                <div className="flex gap-[5px]">
                  <input type="checkbox" name="" id="" />
                  Small(2,139)
                </div>
                <div className="flex gap-[5px]">
                  <input type="checkbox" name="" id="" />
                  Medium(2,139)
                </div>
                <div className="flex gap-[5px]">
                  <input type="checkbox" name="" id="" />
                  Large(2,139)
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[16px] uppercase font-medium">Colors</div>
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-red-500"></div>
                  Red(2,429)
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-green-500"></div>
                  Green(2,298)
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-blue-500"></div>
                  Blue(1,075)
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-purple-500"></div>
                  Purple(1,075)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop_shop_item w-[70%] ">
          <div className="flex justify-between">
            <div className="text-[20px] font-medium">Shop All</div>
            <div className="flex gap-[5px]">
              <Latest />
              <Reference />
            </div>
          </div>
          <div className="shop_shop_cont mt-[50px] grid md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/aboutCard", { state: item });
                }}
              >
                <Card key={item.id} title={item.title} img={item.img} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-[5px] pagination">
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">{"<"}</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-[#7971ea] border text-[#fff] text-[16px]">
              <a href="#">1</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">2</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">3</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">4</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">5</a>
            </div>
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full  border text-[#7971ea] text-[16px]">
              <a href="#">{">"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
