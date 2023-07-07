import React from "react";
import Img1 from "../../../assets/images/person_1.jpg";
import Img2 from "../../../assets/images/person_2.jpg";
import Img3 from "../../../assets/images/person_3.jpg";
import Img4 from "../../../assets/images/person_4.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    name: "Elizabeth Graham",
    job: "CEO/CO-FOUNDER",
    img: Img1,
  },
  {
    id: 2,
    name: "Jennifer Greive",
    job: "CO-FOUNDER",
    img: Img2,
  },
  {
    id: 3,
    name: "Patrick Marx",
    job: "MARKETING",
    img: Img3,
  },
  {
    id: 4,
    name: "Mike Coolbert",
    job: "SALES MANAGER",
    img: Img4,
  },
];

export default () => {
  return (
    <div>
      <div className="about_team mt-[100px]">
        <div className="text-[32px] text-center pb-[50px]">The Team</div>
        <div className="about_team_cont grid grid-cols-1 px-[20px] md:grid-cols-2 md:px-[40px] lg:grid-cols-4 lg:px-[70px] xl:px-[120px] ">
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              job={item.job}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
