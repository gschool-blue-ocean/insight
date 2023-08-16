import React, { useState } from "react";
import { format } from "date-fns"; // Using date-fns for date formatting

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const [showAssignmentInput, setShowAssignmentInput] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    dueDate: null,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value,
    }));
  };

  const handleAssignmentSubmit = (event) => {
    event.preventDefault();
    if (newAssignment.title && newAssignment.dueDate) {
      setAssignmentDetails(newAssignment);
      closeModal();
    }
  };

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
    setSelectedDay(null); // Clear selected day
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
    setSelectedDay(null); // Clear selected day
  };

  const handleDateClick = (date) => {
    setSelectedDay(date);
    // Any additional handling you want to perform when a day is clicked
  };

  const monthYearString = format(selectedDate, "MMMM yyyy");

  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  const endDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  const daysInMonth = endDate.getDate() - startDate.getDate() + 1;
  const startingDayIndex = startDate.getDay(); // Index of the first day in the week (0 = Sun, 1 = Mon, ...)

  const calendarGrid = [];

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const dayIndex = i * 7 + j;
      const dayNumber = dayIndex - startingDayIndex + 1;
      const date = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        dayNumber
      );
      const isCurrentMonth =
        dayIndex >= startingDayIndex && dayNumber <= daysInMonth;

      week.push(
        <div
          key={dayIndex}
          className={`text-left h-[8rem] p-2 ${
            isCurrentMonth ? "cursor-pointer" : "bg-[#00000033]"
          } ${
            selectedDate.getDate() === dayNumber &&
            selectedDate.getMonth() === date.getMonth()
              ? "bg-[#F0BE5E] text-[#31503b]"
              : ""
          } ${
            selectedDay &&
            selectedDay.getDate() === dayNumber &&
            selectedDay.getMonth() === date.getMonth()
              ? "bg-[#f0bd5eb3] text-white"
              : ""
          }`}
          onClick={() => isCurrentMonth && handleDateClick(date)}
        >
          {isCurrentMonth ? dayNumber : ""}
        </div>
      );
    }
    calendarGrid.push(
      <div key={i} className="grid grid-cols-7 gap-1">
        {week}
      </div>
    );
  }

  return (
    <div className="p-4 m-12 rounded shadow">
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2 className="text-xl font-semibold">{monthYearString}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      {calendarGrid}
      <button
        className="mt-2 p-2 text-1xl text-white bg-[#31503b] rounded-[10rem]"
        onClick={openModal}
      >
        Add Assignment
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay">
          <div className="w-full p-4 bg-white rounded shadow-lg modal sm:w-96">
            <h2 className="mb-4 text-xl font-semibold">Add Assignment</h2>
            <form onSubmit={handleAssignmentSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1 font-medium">
                  Assignment Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newAssignment.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-1 font-medium">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newAssignment.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dueDate" className="block mb-1 font-medium">
                  Due Date:
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={newAssignment.dueDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
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
    </div>
  );
};

export default Calendar;
