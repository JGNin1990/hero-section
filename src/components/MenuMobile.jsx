import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineCaretDown } from "react-icons/ai";

const MenuMobile = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(true);

  return (
    <div>
      <div className=" xl:hidden absolute top-0 z-[100]">
        {show3 ? (
          <FiMenu
            className="text-[3rem] ml-4 mt-2 duration-500 cursor-pointer select-none"
            onClick={() => setShow3((pre) => !pre)}
          />
        ) : (
          <ImCross
            className="text-[2rem] ml-4 mt-4 duration-500 cursor-pointer select-none"
            onClick={() => setShow3((pre) => !pre)}
          />
        )}
      </div>
      {!show3 && (
        <div className=" flex flex-col justify-center items-center duration-500 bg-[#0e81ba] absolute top-0 left-0 w-full h-full">
          <a href="/">
            <SiTailwindcss className="text-white text-[3.5rem] absolute top-[10px] right-[20px]" />
          </a>
          <div className="flex flex-col text-start">
            <div className="relative">
              <div
                className=" font-semibold text-[18px] cursor-pointer select-none text-white flex flex-row items-center"
                onClick={() => setShow1((pre) => !pre)}
              >
                Solution
                <AiOutlineCaretDown className="ml-3" />
              </div>
              {show1 && (
                <div className=" duration-500 transition-all">
                  <ul className="text-[15px] pl-2 duration-700 font-medium cursor-pointer select-none text-white">
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
              className="pt-[20px] font-semibold text-[18px] text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-[20px] font-semibold text-[18px] text-white"
            >
              Docs
            </a>
            <div className="relative text-start">
              <div
                className="font-semibold text-[18px] cursor-pointer select-none text-white flex flex-row items-center"
                onClick={() => setShow2((pre) => !pre)}
              >
                More
                <AiOutlineCaretDown className="ml-3" />
              </div>
              {show2 && (
                <div className="duration-500 rounded-md">
                  <ul className="text-[15px] pl-2 duration-700 font-medium cursor-pointer select-none text-white">
                    <li>Aaaaa</li>
                    <li className="py-2">Bbbbb</li>
                    <li>Ccccc</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="w-full mx-auto text-center mt-20">
            <button className=" py-3 px-6 mx-4 rounded-md font-semibold text-[18px] shadow-md bg-[#339dd3] text-white">
              Sign in
            </button>
            <button className="bg-white py-3 px-6 mx-4 rounded-md text-lg font-semibold text-[18px] shadow-md text-[#0e81ba]">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
