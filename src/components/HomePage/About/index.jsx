import React from "react";
import { FaTruck } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineQuestion } from "react-icons/ai";
import Card from "./Card";

const data = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "FREE SHIPPING",
    duration: "400",
  },
  {
    id: 2,
    icon: <FiRefreshCcw />,
    title: "FREE RETURNS",
    duration: "700",
  },
  {
    id: 3,
    icon: <AiOutlineQuestion />,
    title: "FREE SUPPORT",
    duration: "1000",
  },
];

export default () => {
  return (
    <div>
      <div className="home_about pt-[80px] pb-[20px] grid grid-cols-1 px-[20px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3 lg:px-[70px] xl:px-[100px]">
        {data.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
};
