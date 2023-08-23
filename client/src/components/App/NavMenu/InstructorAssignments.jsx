import React, { useContext, useEffect, useState } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";

const InstructorAssignments = () => {
  const { isDarkMode } = useContext(LandingPageContext);
  const [assignments, setAssignments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    due_date: "",
    cohortid: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setNewAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value,
    }));
  };

  const getAssignmentData = async () => {
    try {
      let response = await fetch("http://localhost:10000/assignments/1");
      let data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getAssignmentData();
  }, []);

  const handleAssignmentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:10000/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      });

      if (response.ok) {
        console.log("Assignment added successfully");
      } else {
        console.error("Failed to add assignment:", response.statusText);
      }
    } catch (error) {
      console.error("Error while adding assignment:", error.message);
    }
  };

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
                ? "font-bold text-[3rem] py-4 pb-[1.5rem] border-b-2 w-[95%] flex justify-center"
                : "font-bold text-[3rem] py-4 pb-[1.5rem] border-b-2 border-black w-[95%] flex justify-center"
            }
          >
            Assignments
          </p>
        </div>
        <button
          className="mt-2 p-2 text-[16px] text-white bg-[#4a524c] rounded-[10rem]"
          onClick={openModal}
        >
          Add Assignment
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center modal-overlay">
            <div className="w-full p-4 bg-white rounded shadow-lg modal sm:w-96">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Add Assignment
              </h2>
              <form onSubmit={handleAssignmentSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block mb-1 font-medium text-black"
                  >
                    Assignment Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newAssignment.title}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block mb-1 font-medium text-black"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newAssignment.description}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dueDate"
                    className="block mb-1 font-medium text-black"
                  >
                    Due Date:
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={newAssignment.duedate}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cohortId"
                    className="block mb-1 font-medium text-black"
                  >
                    Cohort ID:
                  </label>
                  <input
                    type="text"
                    id="cohortId"
                    name="cohortId"
                    value={newAssignment.cohortId}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 mr-2 text-white bg-[#31503b] rounded"
                  >
                    Submit Assignment
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-gray-700 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
                  ? "text-[#DCD3EB] text-[2rem]"
                  : "text-DGrayLogin text-[2rem]"
              }
            >
              <tr>
                <th className="py-[1rem]">Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((item, index) => (
                <tr
                  key={index}
                  className={
                    isDarkMode
                      ? index % 2 === 0
                        ? "bg-DGLogin mt-[2rem] font-robot border-b-[1px]"
                        : "mt-[2rem] border-b-[1px]"
                      : index % 2 === 0
                      ? "bg-LGLogin mt-[2rem] font-robot border-b-[1px]"
                      : "mt-[2rem] border-b-[1px]"
                  }
                >
                  <td className="text-center text-[20px] py-[0.7rem]">
                    {item.title}
                  </td>
                  <td className="text-center text-[20px]">
                    {item.description}
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
