import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";

const Footer = () => {
  const { isDarkMode, setIsDarkMode } = useContext(LandingPageContext);
  return (
    <>
      <footer className="m-1 h-[1rem] flex justify-center font-robot ">
        <div className="flex flex-col items-start">
          <ul className="inline-block w-full text-xs">
            <li className="text-black inline-block mr-1 hover:text-[#253c2c] pl-1 after:content-['|'] cursor-pointer">
              {" "}
              Privacy Policy{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1   after:content-['|'] cursor-pointer">
              {" "}
              Manage My Privacy{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1 after:content-['|'] cursor-pointer">
              {" "}
              Do Not Sell or Share My Data{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1   after:content-['|'] cursor-pointer">
              {" "}
              Legal{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1 after:content-['|'] cursor-pointer">
              {" "}
              Accessibility{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1 pl-1 after:content-['|'] cursor-pointer">
              {" "}
              Contact{" "}
            </li>
            <li className="text-black  hover:text-[#253c2c] inline-block mr-1 cursor-pointer">
              Copyright © 2023 Insight Corporation
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
