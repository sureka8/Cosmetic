import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import logo from "../image/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Menu = () => {
  const menuLinks = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "Product", link: "" },
    { id: 3, name: "About", link: "" },
    { id: 4, name: "Contact Us", link: "" },
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [menuopen,setMenuopen]= useState(false)
  const handleMenuOpen = () => {
    setMenuopen(!menuopen)
      setClick(!click)
  }
  return (
    <nav className="overflow-hidden top-0 w-full fixed z-10 md:px-3 md:py-2">
      <div className=" ">
        <div className=" bg-menu ">
          {/* for mobile */}
          <div className="md:hidden px-5 flex items-center justify-between">
            <div className="h-14 w-14">
              <img src={logo} alt="" />
            </div>
            <div onClick={() => handleMenuOpen()} className="text-white text-xl font-bold">
               {menuopen? <RxCross1 /> : <GiHamburgerMenu/>}
            </div>
          </div>
          {/* for desktop */}
          <div className="container mx-auto  md:flex items-center space-x-16 hidden ">
            <div className="h-20 w-20">
              <img src={logo} alt="" />
            </div>
            <div className="flex space-x-8 text-lg font-medium">
              <ul className="flex flex-row space-x-8 text-white">
                <li className="hover:text-rose-500">Home</li>
                <li
                  className="hover:text-rose-500"
                  onClick={() => handleClick()}
                >
                  Product
                </li>
                <li className="hover:text-rose-500">About</li>
                <li className="hover:text-rose-500">Contact Us</li>
              </ul>
            </div>
            <div className="flex space-x-3 items-start  text-white">
              <FaCartShopping size={24} />
              <FaUser size={24} />
            </div>
          </div>
        </div>
        {/* sub menu */}
        {click && (
          <div className="bg-white shadow-xl container mx-auto h-auto w-3/4 p-10 hidden md:block overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="px-10 mt-3">
                <h1 className="text-red-500 font-bold">Women</h1>
                <ul className="flex flex-col space-y-5 mt-3">
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                </ul>
              </div>
              <div className="px-10 mt-3 ">
                <h1 className="text-red-500 font-bold">Women</h1>
                <ul className="flex flex-col space-y-5 mt-3">
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                </ul>
              </div>
              <div className="px-10 mt-3">
                <h1 className="text-red-500 font-bold ">Women</h1>
                <ul className="flex flex-col space-y-5 mt-3">
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                </ul>
              </div>
              <div className="px-10 mt-3">
                <h1 className="text-red-500 font-bold">Women</h1>
                <ul className="flex flex-col space-y-5 mt-3">
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                  <li>Woman Cloths</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {
          menuopen && (
            <div className="bg-red-100 shadow-xl  h-auto w-full p-5 md:hidden" > 
             <ul className="flex flex-col space-y-8 text-menu font-semibold">
                <li className="hover:text-rose-500">Home</li>
                <li
                  className="hover:text-rose-500"
                  onClick={() => handleClick()}
                >
                  Product
               </li>
                  {click && (
                      <div className="grid grid-cols-1  gap-4 items-center md:hidden overflow-y-auto">
                      <div className="px-10 mt-3">
                        <h1 className="text-red-500 font-bold">Women</h1>
                        <ul className="flex flex-col space-y-5 mt-3">
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                        </ul>
                      </div>
                      <div className="px-10 mt-3 ">
                        <h1 className="text-red-500 font-bold">Women</h1>
                        <ul className="flex flex-col space-y-5 mt-3">
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                        </ul>
                      </div>
                      <div className="px-10 mt-3">
                        <h1 className="text-red-500 font-bold ">Women</h1>
                        <ul className="flex flex-col space-y-5 mt-3">
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                        </ul>
                      </div>
                      <div className="px-10 mt-3">
                        <h1 className="text-red-500 font-bold">Women</h1>
                        <ul className="flex flex-col space-y-5 mt-3">
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                          <li>Woman Cloths</li>
                        </ul>
                      </div>
                    </div>
                  )}
                
                <li className="hover:text-rose-500">About</li>
                <li className="hover:text-rose-500">Contact Us</li>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Menu;
