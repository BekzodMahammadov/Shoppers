import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../../assets/images/cloth_1.jpg";
import Img2 from "../../../assets/images/shoe_1.jpg";
import Img3 from "../../../assets/images/cloth_2.jpg";
import Img4 from "../../../assets/images/cloth_3.jpg";
import Img5 from "../../../assets/images/shoe_1.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Card from "./Card";

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
    title: "T-shirt Mockup",
    img: Img4,
  },
  {
    id: 5,
    title: "Corater",
    img: Img5,
  },
];

export default function Feature() {
  return (
    <div>
      <div className="home_feature_product mt-[100px] pt-[80px] pb-[50px] bg-[#F8F9FA]  md:px-[40px] lg:px-[70px]">
        <div className="text-[32px] text-center">Featured Product</div>
        <div className="flex justify-center mt-[30px] px-[20px] lg:px-[60px]">
          <div className="w-[95%] md:w-[105%]  lg:w-[910px] xl:w-[1140px] ">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                425: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper  h-[500px]"
            >
              {data.map((item) => (
                <SwiperSlide>
                  <Card key={item.id} title={item.title} img={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
