import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Assignments = () => {
  //testdata
  const tableData = [
    {
      title: "Assignment 1",
      submitted: false,
      comments: "you suck",
    },
    { title: "Assignment 2", submitted: true, comments: "you suck" },
    { title: "Assignment 3", submitted: false, comments: "you still suck" },
    {
      title: "Assignment 3",
      submitted: true,
      comments:
        "you super super super super super super super super super super super super super super super super super super super super still suck",
    },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
    { title: "Assignment 3", submitted: true, comments: "you still suck" },
  ];
  const viewComment = () => {
    console.log("test");
  };
  return (
    <>
      <div
        id="AssignmentContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="assignmentHeader"
          className="font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
        >
          <p className="font-bold text-[1.75rem] pb-[1.5rem] border-b-2 w-[95%] flex justify-center">
            Assignments
          </p>
        </div>
        <div className="w-[95%] mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-ContentBGDM scrollbar-thumb-DGLogin">
          <table className="w-full overflow-y-scroll max-h-[80%]">
            <thead className="text-[#DCD3EB] text-[1.25rem]">
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
                    index % 2 === 0
                      ? "bg-DGLogin mt-[2rem] border-b-[1px]"
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
                    <FontAwesomeIcon className="text-[2rem] h-5 w-5 text-DOLogin" icon={faCheck}/>
                    </label>
                  </td>
                  <td
                    className={`overflow-x-${viewComment} overflow-y-${viewComment} text-center max-h-[20px] max-w-[10rem]`}
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
