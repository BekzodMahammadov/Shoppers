import React from "react";
import Img1 from "../../../assets/images/women.jpg";
import Img2 from "../../../assets/images/children.jpg";
import Img3 from "../../../assets/images/men.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Women",
    duration: "200",
  },
  {
    id: 2,
    img: Img2,
    title: "Children",
    duration: "400",
  },
  {
    id: 3,
    img: Img3,
    title: "Men",
    duration: "600",
  },
];

export default () => {
  return (
    <div>
      <div className="home_collection mt-[80px] grid grid-cols-1 px-[20px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3 lg:px-[70px] xl:px-[100px]">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
};
