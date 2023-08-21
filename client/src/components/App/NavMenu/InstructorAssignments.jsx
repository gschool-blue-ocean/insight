import React, { useContext, useEffect, useState } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const InstructorAssignments = () => {
  const { isDarkMode } = useContext(LandingPageContext);

  const [assignments, setAssignments] = useState([]);
  const getAssignmentData = async () => {
    try {
      let response = await fetch("/assignments");

      if (!response.ok) {
        throw new Error(`assignments not found, Status: ${response.status}`);
      }

      setAssignments(await response.json());
    } catch (error) {
      console.error(
        "There was a problem finding these assignments:",
        error.message
      );
    }
  };
  useEffect(() => {
    getAssignmentData();
  }, []);

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
              ? "font-robot text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
              : "font-robot text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-black"
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
                <th>Instructor Feedback</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((item, index) => (
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
export default InstructorAssignments;
