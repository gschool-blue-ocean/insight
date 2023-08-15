import React, { useContext } from "react";
const Assignments = () => {
  //testdata
  const tableData = [
    { title: "Long ass assignment name to test overflow", grade: "F", comments: "you suck" },
    { title: "Assignment 2", grade: "C", comments: "you suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    { title: "Assignment 3", grade: "A", comments: "you still suck" },
    {
      title: "Assignment 3",
      grade: "A",
      comments:
        "The sun cast long shadows across the tranquil meadow, as a gentle breeze rustled through the leaves. Birds chirped their harmonious melodies, creating a symphony of nature's music. The scent of blooming wildflowers filled the air, painting the landscape with vibrant colors. It was a serene moment frozen in time.",
    },
  ];
  const viewComment = () => {
    console.log('test')
  }
  return (
    <>
      <div
        id="AssignmentContainer"
        className="flex flex-col items-center font-robot"
      >
        <div
          id="assignmentHeader"
          className="font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
        >
          <p className="font-bold text-[1.75rem] pb-[1.5rem]">Assignments</p>
        </div>
        <div className="w-[95%] mt-[.5rem] border-[1px] overflow-y-scroll max-h-[60%] border-white">
          <table className="w-full overflow-y-scroll max-h-[80%]">
            <thead className="text-[#DCD3EB] text-[1.25rem]">
              <tr>
                <th className="py-[1rem]">Title</th>
                <th>Grade</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody className="">
              {tableData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-DGLogin" : ""}>
                  <td className="text-center py-[0.7rem]">{item.title}</td>
                  <td className="text-center">{item.grade}</td>
                  <td className={`overflow-x-${viewComment} overflow-y-${viewComment} text-center max-h-[20px] max-w-[10rem]`}>{item.comments}</td>
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
