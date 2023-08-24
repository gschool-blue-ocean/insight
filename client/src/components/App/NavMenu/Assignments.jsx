import React, { useContext } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import checkmark from "../../../assets/assignment/checkmark.svg";
import x from "../../../assets/assignment/x.svg";
const Assignments = () => {
  const { isDarkMode, studentAssignments, saData } =
    useContext(LandingPageContext);

  const assignmentResults = [];

  for (const studentAssignment of studentAssignments) {
    const saDataItem = saData.find(
      (sa) => sa.assignmentid === studentAssignment.assignmentid 
    );
    const { grade, is_submitted, instructor_comments } = saDataItem;
    console.log(saDataItem);
    assignmentResults.push({
      title: studentAssignment.title,
      grade,
      is_submitted,
      instructor_comments,
    });
  }



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
                <th>Grade</th>
                <th>Instructor Feedback</th>
              </tr>
            </thead>
            <tbody>
              {assignmentResults.map((item, index) => (
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
                  <td className="flex justify-center">
                    {<img src={`${item.is_submitted ? checkmark : x}`}></img>}
                  </td>
                  <td className="text-center">{item.grade}</td>
                  <td className="text-center">{`${item.instructor_comments}`}</td>
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
