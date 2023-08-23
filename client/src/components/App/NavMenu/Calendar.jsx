import React, { useState, useEffect } from "react";
import { format } from "date-fns"; // Using date-fns for date formatting

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        const response = await fetch("http://localhost:10000/assignments");
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
              ? "bg-[#f0bd5eeb] text-[#31503b]"
              : ""
          } ${
            selectedDay &&
            selectedDay.getDate() === dayNumber &&
            selectedDay.getMonth() === date.getMonth()
              ? "bg-[#f0bd5eb3] text-[#31503b]"
              : ""
          }`}
          onClick={() => isCurrentMonth && handleDateClick(date)}
        >
          {isCurrentMonth ? dayNumber : ""}
          {/* Display assignment data */}
          {assignments.map((assignment) => {
            const startDate = new Date(assignment.start);
            const endDate = new Date(assignment.stop);

            if (
              date >= startDate &&
              date <= endDate &&
              date.getMonth() === startDate.getMonth() && // Check if month matches
              isCurrentMonth // Additional check to ensure the assignment is in the current month
            ) {
              const daysSpanned = Math.ceil(
                (endDate - startDate) / (1000 * 60 * 60 * 24)
              );
              const isStartDay = date.getTime() === startDate.getTime();
              const isEndDay = date.getTime() === endDate.getTime();

              return (
                <div
                  key={assignment.id}
                  className={`assignment ${isStartDay && "assignment-start"} ${
                    isEndDay && "assignment-end"
                  }`}
                >
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
    <div className="p-4 m-8 overflow-y-auto rounded shadow font-robot">
      <h1 className="text-xl font-bold text-left text-[#e1f9ee]">
        Assignment Due Date Tracker
      </h1>
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2 className="text-xl font-semibold text-center">{monthYearString}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      {calendarGrid}
    </div>
  );
};

export default Calendar;
