import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeatureProduct from "../../../HomePage/FeatureProduct";

export default () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleMinus = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div className="w-full h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>{state.title}</p>
      </div>
      <div className="about_Card mt-[40px] md:flex md:justify-between px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <div>
          <img
            src={state.img}
            className="w-[385px] md:w-[330px] lg:w-[420px] xl:w-[480px]"
            alt=""
          />
        </div>
        <div className="w-[385px] md:w-[330px] lg:w-[440px] xl:w-[540px]">
          <div className="text-[32px] font-medium">{state.title}</div>
          <div className="text-[16px] text-[#8c92a0] mt-[5px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            vitae, explicabo? Incidunt facere, natus soluta dolores iusto!
            Molestiae expedita veritatis nesciunt doloremque sint asperiores
            fuga voluptas, distinctio, aperiam, ratione dolore.
          </div>
          <div className="text-[16px] text-[#8c92a0] mt-[10px]">
            Ex numquam veritatis debitis minima quo error quam eos dolorum
            quidem perferendis. Quos repellat dignissimos minus, eveniet nam
            voluptatibus molestias omnis reiciendis perspiciatis illum hic magni
            iste, velit aperiam quis.
          </div>
          <div className="text-[24px] mt-[15px] text-[#7971ea]">$50.00</div>
          <div className="flex gap-[15px]">
            <div className="flex items-center gap-[5px]">
              <input type="radio" name="size" />
              Small
            </div>
            <div className="flex items-center gap-[5px]">
              <input type="radio" name="size" />
              Medium
            </div>
            <div className="flex items-center gap-[5px]">
              <input type="radio" name="size" />
              Large
            </div>
            <div className="flex items-center gap-[5px]">
              <input type="radio" name="size" />
              Extra Large
            </div>
          </div>
          <div className="mt-[20px] flex items-center gap-[15px] w-[107px] border rounded-[5px]">
            <button
              className="text-[20px] border rounded-s-[5px] border-[#7971ea] about_Card_btn hover:bg-[#7971ea]"
              onClick={() => {
                handleMinus();
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className="text-[20px] rounded-e-[5px] border  border-[#7971ea] about_Card_btn hover:bg-[#7971ea]"
              onClick={() => {
                handlePlus();
              }}
            >
              +
            </button>
          </div>
          <div
            className="mt-[40px]"
            onClick={() => {
              navigate("/basket");
            }}
          >
            <button className="w-[150px] about_add_card h-[43px] bg-[#7971ea] rounded-md text-[#fff] uppercase">
              Add to Card
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <FeatureProduct />
      </div>
    </div>
  );
};
