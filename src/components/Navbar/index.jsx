import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "./dropdown/home";
import About from "./dropdown/about";

export default () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      <hr />
      <div className="navbar flex items-center md:flex-col md:items-stretch gap-[10px] ">
        <div className="navbar_top  text-[17px] text-[#868995] flex justify-between items-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[150px] py-[40px]">
          <div className="flex items-center gap-[15px]">
            <BsSearch />
            <input type="text" placeholder="Search" className="w-[100px]" />
          </div>
          <div className="nav_logo uppercase border border-[#25262a] p-[7px] ml-[-20px] ">
            <a
              href="#"
              style={{ letterSpacing: "7px" }}
              className="text-[14px] md:text-[20px] text-[#25262a]"
            >
              Shoppers
            </a>
          </div>
          <div className="flex items-center gap-[15px]">
            <a href="#">
              <FaUser />
            </a>
            <a href="">
              <AiOutlineHeart />
            </a>
            <NavLink to={"/basket"}>
              <SlBasket />
            </NavLink>
          </div>
        </div>
        <div className="navbar_bottom border-t border-[#F3F3F4] hidden py-[20px] md:block  md:flex justify-center  items-center text-[#25262a] text-[15px] uppercase gap-[30px]">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <Home />
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <About />
          </NavLink>
          <NavLink
            to={"/shop"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Shop
          </NavLink>
          <NavLink
            to={"/catalogue"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Catalogue
          </NavLink>
          <NavLink
            to={"/newarrivals"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            New arrivals
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="block md:hidden">
          <button className="text-[22px]" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className={`open_menu fixed top-0 right-0  h-screen z-[100]  ${
          open ? "w-full" : "w-0"
        } bg-[rgba(0,0,0,0.5)] ${open ? "block" : "hidden"}`}
      >
        <div className="w-[70%] z-[100]  h-screen bg-[#fff] float-right px-[50px] py-[30px]">
          <div className=" flex flex-col gap-[20px]">
            <div className="nav_logo uppercase border border-[#25262a] p-[7px] w-[170px] ">
              <a
                href="#"
                style={{ letterSpacing: "7px" }}
                className="text-[20px] text-[#25262a]"
              >
                Shoppers
              </a>
            </div>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/catalogue"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Catalogue
            </NavLink>
            <NavLink
              to={"/newarrivals"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              New arrivals
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
