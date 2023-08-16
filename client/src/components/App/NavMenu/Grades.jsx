import React, { useContext } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Grades = () => {
  const { isDarkMode } = useContext(LandingPageContext);
  const tableData = [
    { title: "Project A", grade: "93%" },
    { title: "Test Alpha", grade: "67%" },
    { title: "Essay I", grade: "88%" },
    { title: "Quiz X", grade: "99%" },
    { title: "Homework 5", grade: "91%" },
    { title: "Exam II", grade: "77%" },
    { title: "Lab 3", grade: "70%" },
    { title: "Report Z", grade: "84%" },
    { title: "Task 4", grade: "94%" },
    { title: "Module Test", grade: "92%" },
    { title: "Presentation 1", grade: "100%" },
    { title: "Fieldwork", grade: "79%" },
    { title: "Study II", grade: "86%" },
    { title: "Workshop 3", grade: "76%" },
    { title: "Activity B", grade: "89%" },
];

  return (
    <>
      <div
        id="GradesContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="gradesHeader"
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
            Grades
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
                <th className="py-[1rem]">Title</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
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
                  <td className="text-center py-[0.7rem]">{item.title}</td>
                  <td className="text-center">{item.grade}</td>
                  <td className={`text-center max-h-[20px] max-w-[10rem]`}>
                    {item.comments}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Grades;
