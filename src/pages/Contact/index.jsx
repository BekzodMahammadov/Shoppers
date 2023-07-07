import React from "react";

export default () => {
  return (
    <div>
      <div className="w-full h-[60px] bg-[#F8F9FA] flex gap-[5px] items-center px-[20px] md:px-[40px] lg:px-[70px] xl:px-[140px]">
        <p>
          <a href="#" className="text-[#7971EA]">
            Home /
          </a>
        </p>
        <p>Contact</p>
      </div>
      <div className="contatct_page mt-[60px] px-[20px] md:px-[40px] lg:px-[70px] xl:px-[120px]">
        <div className="text-[26px]">Get In Touch</div>
        <div className="contac_page_cont md:flex justify-center gap-[30px] mt-[40px]">
          <div className="contact_page_item border border-[#DEE2E6] p-[16px] lg:p-[48px] w-[385px] md:w-[390px] lg:w-[529px] xl:w-[653px] flex flex-col gap-[15px]">
            <div className="md:flex md:justify-between contact_bug">
              <div className="text-[16px] flex flex-col gap-[10px]">
                <p>First Name</p>
                <input
                  type="text"
                  className="h-[43px] py-[6px] px-[12px] rounded border border-[#DEE2E6] w-[385px] md:w-[162px] lg:w-[200px]  xl:w-[253px] "
                  name=""
                  id=""
                />
              </div>
              <div className="text-[16px] flex flex-col gap-[10px]">
                <p>Last Name</p>
                <input
                  type="text"
                  className="h-[43px] py-[6px] px-[12px] rounded border border-[#DEE2E6] w-[385px] md:w-[162px] lg:w-[200px]  xl:w-[253px] "
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="text-[16px] flex flex-col gap-[10px]">
              <p>Email</p>
              <input
                type="email"
                className="w-full h-[43px] py-[6px] px-[12px] rounded border border-[#DEE2E6]"
                name=""
                id=""
              />
            </div>
            <div className="text-[16px] flex flex-col gap-[10px]">
              <p>Subject</p>
              <input
                type="text"
                className="w-full h-[43px] py-[6px] px-[12px] rounded border border-[#DEE2E6]"
                name=""
                id=""
              />
            </div>
            <div className="text-[16px] flex flex-col gap-[10px]">
              <p>Message</p>
              <textarea
                type="text"
                className="w-full h-[182px] py-[6px] px-[12px] rounded border border-[#DEE2E6]"
                name=""
                id=""
              ></textarea>
            </div>
            <div>
              <button className="w-full h-[43px] bg-[#7971EA] rounded uppercase  text-[#fff]">
                Send message
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="contact_page_item border border-[#DEE2E6] p-[16px] lg:p-[24px] w-[385px] md:w-[270px] lg:w-[370px] xl:w-[420px] flex flex-col gap-[7px]">
              <div className="text-[16px] text-[#7971EA] uppercase">
                NEW YORK
              </div>
              <div className="text-[#8c92a0] text-[16px]">
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
            </div>
            <div className="contact_page_item border border-[#DEE2E6] p-[16px] lg:p-[24px] w-[385px] md:w-[270px] lg:w-[370px] xl:w-[420px] flex flex-col gap-[7px]">
              <div className="text-[16px] text-[#7971EA] uppercase">London</div>
              <div className="text-[#8c92a0] text-[16px]">
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
            </div>
            <div className="contact_page_item border border-[#DEE2E6] p-[16px] lg:p-[24px] w-[385px] md:w-[270px] lg:w-[370px] xl:w-[420px] flex flex-col gap-[7px]">
              <div className="text-[16px] text-[#7971EA] uppercase">Canada</div>
              <div className="text-[#8c92a0] text-[16px]">
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
