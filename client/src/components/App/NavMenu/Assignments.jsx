import React, { useContext } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Assignments = () => {
  const { isDarkMode } = useContext(LandingPageContext);
  //testdata
  const tableData = [
    {
      title: "Task A",
      submitted: true,
      comments: "Solid effort, keep it up!",
    },
    { title: "Task B", submitted: false, comments: "Needs improvement" },
    { title: "Task C", submitted: true, comments: "Well done!" },
    {
      title: "Task D",
      submitted: false,
      comments:
        "This was an exemplary submission. Your attention to detail and your thorough analysis stood out. It's clear that you put a lot of effort into this. Just remember to focus on the main points next time, as some areas felt a bit verbose.",
    },
    { title: "Task E", submitted: true, comments: "Average performance" },
    { title: "Task F", submitted: false, comments: "You've missed the main point" },
    { title: "Task G", submitted: true, comments: "Above average, good job" },
    { title: "Task H", submitted: false, comments: "Perfect, well done!" },
    { title: "Task I", submitted: true, comments: "You can do better next time" },
    { title: "Task J", submitted: true, comments: "Very thorough!" },
    { title: "Task K", submitted: true, comments: "See me after class" },
    { title: "Task L", submitted: false, comments: "This was a good attempt" },
  ];
  
  
  
  return (
    <>
      <div
        id="AssignmentContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="assignmentHeader"
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
            Assignments
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
                <th>Submitted</th>
                <th>Comments</th>
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
                  <td className="text-center">
                    <label htmlFor="checkbox1">
                      <input
                        type="checkbox"
                        checked={item.submitted}
                        className="w-5 h-5 appearance-none"
                        id="checkbox1"
                        readOnly
                      />
                      <FontAwesomeIcon
                        className={
                          isDarkMode
                            ? "text-[2rem] h-5 w-5 text-DOLogin"
                            : "text-[2rem] h-5 w-5 text-LPLogin"
                        }
                        icon={faCheck}
                      />
                    </label>
                  </td>
                  <td
                    className={`text-center max-h-[20px] max-w-[10rem]`}
                  >
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
export default Assignments;
