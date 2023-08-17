import React, { useContext } from "react";
import { Link } from "react-router-dom";
import question from "/assets/question/questionDM.svg";
const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[10rem] h-screen text-white bg-DGLogin text-center">
        <img src={question} alt="question mark" />
        <h1 className="text-[6rem] border-DOLogin border-b-2">
          404 Page not found
        </h1>
        <div className="pt-[2rem]">
          <Link to="/">
            <button className="p-3 border-black rounded-md hover:scale-[1.1] hover:shadow-focusDM-orange bg-BGboxDM">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Error;
