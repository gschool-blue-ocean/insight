import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import LandingPageContext from "../LandingPage/LandingPageContext";
import alertDM from "/assets/alerts/alertDM.svg";
import alertLM from "/assets/alerts/alertLM.svg";

const StudentsLanding = () => {
  const {
    monthNames,
    daysOfWeek,
    isDarkMode,
    countdown,
    year,
    month,
    day,
    dayOfWeek,
    cohortNumber,
    daysMissed,
    userFirstName,
    currentStudent,
    saData,
  } = useContext(LandingPageContext);

  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.register(BarElement, CategoryScale, LinearScale, Legend);
  ChartJS.defaults.color = "#000000";

  let studentid;
  if (currentStudent[0]) {
    studentid = currentStudent[0].studentid;
  }

  const calculateAverage = (arr) => {
    let total = 0;
    for (let assignment of arr) {
      total += assignment.grade;
    }
    return total / arr.length;
  };
  const averageGrade = calculateAverage(saData);
  console.log(averageGrade);

  const uncompleted = 100 - averageGrade;
  const courseLength = 117;
  const attendanceChart = {
    datasets: [
      {
        data: [courseLength, daysMissed],
        backgroundColor: isDarkMode
          ? ["#1A3D36", "#F0BE5E"]
          : ["#63B9AA", "#280137"],
        borderColor: ["black"],
      },
    ],
  };

  const gpaChart = {
    datasets: [
      {
        data: [averageGrade, uncompleted],
        backgroundColor: isDarkMode
          ? ["#1A3D36", "#F0BE5E"]
          : ["#63B9AA", "#280137"],
        borderColor: ["black"],
      },
    ],
  };
  const donutConfig = {
    type: "pie",
    gpaChart,
    options: {
      responsive: true,
      maintainAspectRatio: true,
    },
  };
  const attendanceConfig = {
    type: "doughnut",
    attendanceChart,
    options: {
      responsive: true,
      maintainAspectRatio: true,
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div
          id="workHeader"
          className="flex justify-between items-center  border-b-2 border-DGLogin w-[90%] pb-[2rem] mb-[2rem]"
        >
          <div id="attendanceContainer" className="pl-[2rem] pt-[1rem] mr-[9%]">
            <p>Attendance</p>
            <div id="checkInContainer" className="flex gap-[0.5rem]">
              <input type="checkbox" className="cursor-pointer" />
              <p>Check-in</p>
            </div>
            <p>{`${daysMissed} Missed Days`}</p>
          </div>
          <div
            id="welcomeContainer"
            className="flex flex-col items-center pt-[2rem]"
          >
            <h1 className="text-[3rem]">{`Cohort ${cohortNumber}`}</h1>
            <p>{`Welcome ${userFirstName}`}</p>
          </div>
          <div
            id="date"
            className="flex items-start pt-[1rem] pr-[1rem] gap-[1rem]"
          >
            <p>{`${daysOfWeek[dayOfWeek - 1]} ${
              monthNames[month]
            } ${day}, ${year}`}</p>
            {isDarkMode ? (
              <img src={alertDM} alt="notification bell" />
            ) : (
              <img src={alertLM} alt="notification bell" />
            )}
          </div>
        </div>
      </div>
      <div
        id="analyticsContainer"
        className="px-[2rem] pb-[2.5rem] text-[1.25rem] justify-between items-center h-[80%] w-full flex"
      >
        <div id="attendance" className="flex flex-col items-center gap-[1rem]">
          <p>Attendance</p>
          <div className="flex justify-evenly">
            <Pie
              data={attendanceChart}
              options={attendanceConfig}
              className="w-[20rem]"
            />
          </div>
        </div>

        <div
          id="countdown"
          className="flex flex-col items-center gap-[1rem] mb-[4rem]"
        >
          <p className="pb-[1rem] ">Days until Graduation</p>
          <div
            className={
              isDarkMode
                ? "text-[8rem] font-bold border-black border-[3px] bg-DGLogin text-DOLogin rounded-md "
                : "text-[8rem] font-bold border-black border-[3px] bg-LGLogin text-LPLogin rounded-md"
            }
          >
            <p
              className={
                countdown < 0
                  ? "font-robot p-[0.5rem] text-[3rem] h-auto w-[10%]"
                  : "font-robot p-[1rem] h-auto w-[10%]"
              }
            >
              {countdown < 0 ? "Finished" : countdown}
            </p>
          </div>
        </div>
        <div id="GPA" className="flex flex-col items-center gap-[1rem]">
          <p>{`Current Grade Average : ${averageGrade}%`}</p>
          <div>
            <Doughnut
              data={gpaChart}
              options={donutConfig}
              className="w-[20rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentsLanding;
