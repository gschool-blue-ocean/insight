import React, { useState } from "react";
import { format } from "date-fns"; // Using date-fns for date formatting

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // You can add more logic here, like showing events for the clicked date
  };

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
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
          className={`text-center h-[8rem] p-12 ${
            isCurrentMonth ? "cursor-pointer" : "bg-[#00000033]"
          } ${
            selectedDate.getDate() === dayNumber &&
            selectedDate.getMonth() === date.getMonth()
              ? "bg-DOLogin text-[#31503b]"
              : ""
          }`}
          onClick={() => isCurrentMonth && handleDateClick(date)}
        >
          {isCurrentMonth ? dayNumber : ""}
        </div>
      );
    }
    calendarGrid.push(
      <div key={i} className="grid grid-cols-7 gap-2">
        {week}
      </div>
    );
  }

  return (
    <div className="p-4 rounded shadow m-14">
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrevMonth}></button>
        <h2 className="text-xl font-semibold">{monthYearString}</h2>
        <button onClick={handleNextMonth}></button>
      </div>
      {calendarGrid}
    </div>
  );
};

export default Calendar;
