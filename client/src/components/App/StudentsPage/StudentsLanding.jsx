import React, { useContext } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import LandingPageContext from "../LandingPage/LandingPageContext";
import alertDM from "/assets/alerts/alertDM.svg";
import alertLM from "/assets/alerts/alertLM.svg";

const StudentsLanding = () => {
  const {
    monthNames,
    daysOfWeek,
    isDarkMode,
    averageGrade,
    countdown,
    year,
    month,
    day,
    dayOfWeek,
  } = useContext(LandingPageContext);

  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.register(BarElement, CategoryScale, LinearScale, Legend);
  ChartJS.defaults.color = '#000000' 
  const attendanceChart = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    datasets: [
      {
        label: "Attendance",
        data: [
          53.2, 72.8, 89.4, 67.5, 78.1, 91.3, 59.2, 84.6, 65.9, 76.3, 58.7,
          80.4, 92.1, 55.5, 86.8, 70.3,
        ],
        backgroundColor: "#1A3D36",
        borderColor: "#000000",
        borderWidth: 2,
      },
    ],
  };

  const uncompleted = 100 - averageGrade;
  const gpaChart = {
    datasets: [
      {
        data: [averageGrade, uncompleted],
        backgroundColor: ["#1A3D36", "#F0BE5E"],
        borderColor: ["black"],
      },
    ],
  };
  const donutConfig = {};
  const barConfig = {
    type: "bar",
    options: {
      plugins: {
        legend: {},
        labels: {
          fontColor: "white",
        },
      },
    },
  };

  //testdata
  let daysMissed = 4;
  let cohortNumber = 22;
  let studentsFirstName = "William";
  let GPA = averageGrade;

  return (
    <>
      <div
        id="workHeader"
        className="flex justify-between items-center text-center border-b-2 border-DGLogin w-[90%] pb-[2rem]"
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
          <p>{`Welcome ${studentsFirstName}`}</p>
        </div>
        <div
          id="date"
          className="flex items-start pt-[1rem] pr-[1rem] gap-[1rem]"
        >
          <p>{`${daysOfWeek[dayOfWeek]} ${monthNames[month]} ${day}, ${year}`}</p>
          {isDarkMode ? (
            <img src={alertDM} alt="notification bell" />
          ) : (
            <img src={alertLM} alt="notification bell" />
          )}
        </div>
      </div>
      <div
        id="analyticsContainer"
        className="px-[2rem] py-[1rem] text-[1.25rem] flex-col justify-between h-[80%] w-full"
      >
        <div className="pb-[3rem]">
          <div
            id="attendance"
            className="flex flex-col items-center gap-[1rem]"
          >
            <p>Attendance By Week</p>
            <div className="">
              <Bar
                data={attendanceChart}
                options={barConfig}
                className="h-[15rem] w-[23%]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div id="countdown" className="flex flex-col items-center gap-[1rem]">
            <p className="pb-[1rem]">Days until Graduation</p>
            <div className="text-[8rem] font-bold border-black border-[3px] bg-DGLogin text-DOLogin rounded-md">
              <p
                className={
                  countdown < 0
                    ? "font-robot p-[0.5rem] text-[4rem]"
                    : "font-robot p-[1rem]"
                }
              >
                {countdown < 0 ? "Finished" : countdown}
              </p>
            </div>
          </div>
          <div
            id="GPA"
            className="flex flex-col items-center gap-[1rem] pb-[4rem]"
          >
            <p>{`Current Grade Average : ${GPA}%`}</p>
            <div>
              <Doughnut
                data={gpaChart}
                options={donutConfig}
                className="h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentsLanding;
