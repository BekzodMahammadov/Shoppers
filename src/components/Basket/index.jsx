import React, { useState } from "react";
import Img1 from "../../assets/images/cloth_1.jpg";
import Img2 from "../../assets/images/cloth_2.jpg";
import { useNavigate } from "react-router-dom";

export default () => {
  const naviate = useNavigate();
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div className="w-full  h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>Cart</p>
      </div>
      <div className="basket mt-[60px]">
        <div className="basket_table flex md:justify-center px-[20px]">
          <table className="border  md:w-[690px] lg:w-[930px] xl:w-[1070px]">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
            <tr>
              <td>
                <img src={Img1} className="w-[68px]  lg:w-[159px]" alt="" />
              </td>
              <td className="text-[20px] ">Top Up T-Shirt</td>
              <td>$49.00</td>
              <td>
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
              </td>
              <td>$49.00</td>
              <td>
                <button className="remove_btn text-[20px] text-[#fff] w-[52px] h-[43px] bg-[#7971ea]">
                  X
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={Img2} className="w-[68px] lg:w-[159px]" alt="" />
              </td>
              <td className="text-[20px] ">Top Up T-Shirt</td>
              <td>$49.00</td>
              <td>
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
              </td>
              <td>$49.00</td>
              <td>
                <button className="remove_btn text-[20px] text-[#fff] w-[52px] h-[43px] bg-[#7971ea]">
                  X
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div className="basket_cupon flex md:justify-between mt-[70px] px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
          <div className="cupon_item flex flex-col gap-[40px]">
            <div className="flex gap-[10px] cupon_column">
              <button className="w-[385px] h-[43px] cupon_btn rounded md:w-[150px] lg:w-[210px] xl:w-[255px] bg-[#7971ea] ">
                Update Card
              </button>
              <button className="w-[385px] h-[43px]  cupon_btn1 rounded md:w-[150px] lg:w-[210px] xl:w-[255px] border border-[#7971ea]  hover:bg-[#7971ea] hover:text-[#fff]">
                Continue Shopping
              </button>
            </div>
            <div>
              <div className="text-[24px]">Coupon</div>
              <div className="text-[16px] text-[#8c92a0] mt-[10px]">
                Enter your coupon code if you have one.
              </div>
              <div className="mt-[10px] md:flex gap-[20px] cupon_column">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="py-[16px] px-[12px] h-[43px] rounded border border-[#DFE3E7] w-[385px] md:w-[210px] lg:w-[290px] xl:w-[350px]"
                  name=""
                  id=""
                />
                <button className="cupon_btn text-[#fff] w-[385px] md:w-[164px]  h-[43px] rounded bg-[#7971ea]">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
          <div className="cupon_item flex flex-col gap-[40px] w-[385px] md:w-[200px] lg:w-[260px] xl:w-[315px]">
            <div className="text-[24px] uppercase text-end">
              Cart Total
              <hr />
            </div>
            <div className="text-[16px] flex flex-col gap-[20px]">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$230.00</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>$230.00</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  naviate("/checkout");
                }}
                className="w-full h-[60px] bg-[#7971EA] rounded text-[#fff] text-[16px] uppercase"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
