import { SiTailwindcss } from "react-icons/si";
import { AiOutlineCaretDown } from "react-icons/ai";

import { useState } from "react";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <div className="hidden xl:flex flex-row justify-between px-12 py-5 shadow-md items-center absolute top-0 w-[100%] bg-[#f9f9f9]">
        <a href="/">
          <SiTailwindcss className="text-[#0e81ba] text-[3.5rem]" />
        </a>
        <div className="flex flex-row items-center">
          <div className="relative">
            <div
              className="px-[30px] font-semibold text-[18px] cursor-pointer select-none text-gray-500 flex flex-row items-center"
              onClick={() => setShow1((pre) => !pre)}
            >
              Solution
              <AiOutlineCaretDown className="ml-3" />
            </div>
            {show1 && (
              <div className="bg-[#d5d4d4] duration-500 transition-all rounded-md shadow-sm px-8 py-3 text-black absolute top-9 left-[50%] translate-x-[-50%]">
                <ul className="text-[15px] duration-700 font-medium cursor-pointer select-none text-gray-700">
                  <li>About</li>
                  <li className="py-2">Contact</li>
                  <li>Services</li>
                </ul>
              </div>
            )}
          </div>
          <div></div>

          <a
            href="#"
            className="px-[30px] font-semibold text-[18px] text-gray-500"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-[30px] font-semibold text-[18px] text-gray-500"
          >
            Docs
          </a>
          <div className="relative">
            <div
              className="px-[30px] font-semibold text-[18px] cursor-pointer select-none text-gray-500 flex flex-row items-center"
              onClick={() => setShow2((pre) => !pre)}
            >
              More
              <AiOutlineCaretDown className="ml-3" />
            </div>
            {show2 && (
              <div className="bg-[#d5d4d4] duration-500 rounded-md shadow-sm px-8 py-3 text-black absolute top-9 left-[50%] translate-x-[-50%]">
                <ul className="text-[15px] duration-700 font-medium cursor-pointer select-none text-gray-700">
                  <li>Aaaaa</li>
                  <li className="py-2">Bbbbb</li>
                  <li>Ccccc</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <button className=" py-3 px-6 mx-1 rounded-md font-semibold text-[18px] text-gray-500">
            Sign in
          </button>
          <button className="bg-[#0e81ba] py-3 px-6 mx-1 rounded-md text-lg font-semibold text-[18px] text-white">
            Sign up
          </button>
        </div>
      </div>
     <MenuMobile />
    </>
  );
};

export default Navbar;
