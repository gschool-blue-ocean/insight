import React, { useContext, useEffect, useState } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";

const Students = () => {
  const { isDarkMode } = useContext(LandingPageContext);
  const [students, setStudents] = useState([]);

  const getUserData = async () => {
    try {
      let response = await fetch("/users/student");
      let data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div
        id="studentsContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="studentsHeader"
          className={
            isDarkMode
              ? "font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
              : "font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-black"
          }
        >
          <p
            className={
              isDarkMode
                ? "font-bold text-[1.75rem] pb-[1.5rem] border-b-2 w-[95%] flex justify-center"
                : "font-bold text-[1.75rem] pb-[1.5rem] border-b-2 border-black w-[95%] flex justify-center"
            }
          >
            Students
          </p>
        </div>
        <div
          className={
            isDarkMode
              ? "w-[95%] mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-ContentBGDM scrollbar-thumb-DOLogin"
              : "w-[95%] mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-BGboxLM scrollbar-thumb-LPLogin"
          }
        >
          <table className="w-full overflow-y-scroll max-h-[80%]">
            <thead
              className={
                isDarkMode
                  ? "text-[#DCD3EB] text-[1.25rem]"
                  : "text-DGrayLogin text-[1.25rem]"
              }
            >
              <tr>
                <th className="py-[1rem]">First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr
                  key={index}
                  className={
                    isDarkMode
                      ? index % 2 === 0
                        ? "bg-DGLogin mt-[2rem] border-b-[1px]"
                        : "mt-[2rem] border-b-[1px]"
                      : index % 2 === 0
                      ? "bg-LGLogin mt-[2rem] border-b-[1px]"
                      : "mt-[2rem] border-b-[1px]"
                  }
                >
                  <td className="text-center py-[0.7rem]">{item.firstName}</td>
                  <td className="text-center">{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
