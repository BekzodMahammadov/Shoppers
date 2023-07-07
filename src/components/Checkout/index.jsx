import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full  h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>Checkout</p>
      </div>
      <div className="checkout mt-[70px] px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <div className="w-full h-auto p-[24px] border border-[#DEE2E6] ">
          Returning customer?{" "}
          <span>
            <a href="#" className="text-[#7971ea]">
              Click here
            </a>
          </span>
          to login
        </div>
        <div className="checkout_cont md:flex md:justify-between gap-[30px] mt-[50px]">
          <div className="checkout_item ">
            <div className="text-[28px]">Billing Details</div>
            <div className="w-[385px] flex flex-col gap-[30px] border border-[#DEE2E6] p-[16px] md:w-[330px] lg:w-[450px] lg:p-[48px] xl:w-[540px]">
              <div className="flex flex-col gap-[7px]">
                <div>Country</div>
                <select
                  name=""
                  className="w-full h-[43px] rounded py-[6px] px-[12px] border border-[#DEE2E6]"
                  id=""
                >
                  <option value="">Select a country</option>
                  <option value="">Algeria</option>
                  <option value="">Afghanistan</option>
                  <option value="">Ghana</option>
                  <option value="">Albania</option>
                  <option value="">Bahrain</option>
                  <option value="">Colombia</option>
                </select>
              </div>
              <div className="cupon_column md:flex md:justify-between gap-[20px] md:gap-0">
                <div className="flex flex-col gap-[7px]">
                  <div>First Name </div>
                  <input
                    type="text"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <div>Last Name </div>
                  <input
                    type="text"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <div>Company Name</div>
                <input
                  type="text"
                  className="w-full h-[43px]  rounded py-[6px] px-[12px] border border-[#DEE2E6]"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <div>Adress</div>
                <input
                  placeholder="Street adress"
                  type="text"
                  className="w-full h-[43px]  rounded py-[6px] px-[12px] border border-[#DEE2E6]"
                  name=""
                  id=""
                />
                <input
                  placeholder="Apartment, suite, unit etc.(optional)"
                  type="text"
                  className="w-full h-[43px]  rounded py-[6px] px-[12px] border border-[#DEE2E6]"
                  name=""
                  id=""
                />
              </div>
              <div className="cupon_column md:flex md:justify-between gap-[20px] md:gap-0">
                <div className="flex flex-col gap-[7px]">
                  <div>State / Country </div>
                  <input
                    type="text"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <div>Posta / Zip </div>
                  <input
                    type="text"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="cupon_column md:flex md:justify-between gap-[20px] md:gap-0">
                <div className="flex flex-col gap-[7px]">
                  <div>Email Adress </div>
                  <input
                    type="email"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <div>Phone </div>
                  <input
                    placeholder="Phone Number"
                    type="number"
                    className="w-[350px] py-[6px] px-[12px] border border-[#dee2e6] rounded  h-[43px] md:w-[133px] lg:w-[161px] xl:w-[206px]"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex gap-[5px]">
                <input type="checkbox" name="" id="" />
                <p>Create an account?</p>
              </div>
              <div className="flex gap-[5px]">
                <input type="checkbox" name="" id="" />
                <p>Ship To A Different Address?</p>
              </div>
              <div className="flex flex-col gap-[7px]">
                <div>Order Notes</div>
                <div>
                  <textarea
                    placeholder="Write your notes here..."
                    name=""
                    className="w-full py-[6px] px-[12px] border border-[#dee2e6] rounded h-[134px]"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout_item flex flex-col gap-[30px] w-[385px]  md:w-[330px] lg:w-[450px]  xl:w-[540px]">
            <div>
              <div className="text-[28px]">Coupon Code</div>
              <div className="w-full border h-auto flex flex-col gap-[15px] border-[#DEE2E6] p-[16px] lg:p-[48px]">
                <div>Enter your coupon code if you have one</div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="w-[180px] py-[6px] px-[12px] border rounded-s border-[#DEE2E6] p-[16px] h-[43px] md:w-[132px] lg:w-[174px] xl:w-[271px]"
                    name=""
                    id=""
                  />
                  <button className="bg-[#7971ea] about_add_card text-[#fff] uppercase w-[90px] h-[43px] rounded-e">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[28px]">Your Order</div>
              <div className="w-full border h-auto flex flex-col gap-[15px] border-[#DEE2E6] p-[16px] lg:p-[48px]">
                <div className="flex justify-between font-semibold px-[20px]">
                  <p>Product</p>
                  <p>Total</p>
                </div>
                <hr />
                <div className="flex justify-between px-[20px]">
                  <p>Top Up T-Shirt x 1</p>
                  <p>$250.00</p>
                </div>
                <hr />
                <div className="flex justify-between px-[20px]">
                  <p>Polo Shirt x 1</p>
                  <p> $100.00</p>
                </div>
                <hr />
                <div className="flex justify-between px-[20px]">
                  <p className=" font-semibold">Cart Subtotal</p>
                  <p>$350.00</p>
                </div>
                <hr />
                <div className="flex justify-between font-semibold px-[20px]">
                  <p className=" ">Order Total</p>
                  <p>$350.00</p>
                </div>
                <div className="mt-[30px] flex flex-col gap-[15px]">
                  <div className="w-full h-[57px] text-[#7971ea] border border-[#DEE2E6]  p-[16px]">
                    Direct Bank Transfer
                  </div>
                  <div className="w-full h-[57px] text-[#7971ea] border border-[#DEE2E6]  p-[16px]">
                    Cheque Payment
                  </div>
                  <div className="w-full h-[57px] text-[#7971ea] border border-[#DEE2E6]  p-[16px]">
                    Paypal
                  </div>
                </div>
                <div className="mt-[30px]">
                  <button
                    onClick={() => {
                      navigate("/thankyou");
                    }}
                    className="h-[60px] w-full about_add_card text-[#fff] uppercase rounded bg-[#7971ea]"
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
