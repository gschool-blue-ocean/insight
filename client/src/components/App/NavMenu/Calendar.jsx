import React, { useState, useEffect } from "react";
import { format } from "date-fns"; // Using date-fns for date formatting

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        const response = await fetch("http://localhost:10000/assignments/1");
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    }

    fetchAssignments();
  }, []);

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
          className={`text-left h-[7.5rem] p-4 ${
            isCurrentMonth ? "cursor-pointer" : "bg-[#00000033]"
          } ${
            selectedDate.getDate() === dayNumber &&
            selectedDate.getMonth() === date.getMonth()
              ? "bg-[#f0bd5eeb] text-[#1d1e1d]"
              : ""
          } ${
            selectedDay &&
            selectedDay.getDate() === dayNumber &&
            selectedDay.getMonth() === date.getMonth()
              ? "bg-[#f0bd5eb3] text-[#1d1e1d]"
              : ""
          }`}
          onClick={() => isCurrentMonth && handleDateClick(date)}
        >
          {dayNumber > 0 && dayNumber <= daysInMonth ? (
            <div className="text-[#2f4a36]">{dayNumber}</div>
          ) : (
            <div className="text-[#717672]">
              {dayNumber <= 0
                ? daysInMonth + dayNumber
                : dayNumber - daysInMonth}
            </div>
          )}
          {assignments.map((assignment) => {
            const dueDate = new Date(assignment.due_date);
            if (
              isCurrentMonth &&
              dueDate.getDate() === dayNumber &&
              dueDate.getMonth() === date.getMonth()
            ) {
              return (
                <div key={assignment.id} className="text-[#1c1d1d]">
                  {assignment.title}
                </div>
              );
            }
            return null;
          })}
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
    <div className="h-full p-4 m-8 overflow-y-auto rounded shadow font-robot">
      <h1 className="text-[26px] font-bold text-left text-[#e1f9ee]">
        Assignment Due Date Tracker
      </h1>
      <div className="flex items-center justify-between mb-2">
        <button
          className="p-4 border-2 border-[#33483c] rounded-xl"
          onClick={handlePrevMonth}
        >
          Previous
        </button>
        <h2 className="text-[30px] font-semibold text-center">
          {monthYearString}
        </h2>
        <button
          className="p-4 border-2 border-[#33483c] rounded-xl"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      {calendarGrid}
    </div>
  );
};

export default Calendar;
