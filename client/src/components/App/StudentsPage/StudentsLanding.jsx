import React, { useContext } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import alertDM from "/assets/alerts/alertDM.svg";
import alertLM from "/assets/alerts/alertLM.svg";

const StudentsLanding = () => {
  const {
    monthNames,
    daysOfWeek,
    isDarkMode,
  } = useContext(LandingPageContext);

  //testdata
  let daysMissed = 4;
  let cohortNumber = 22;
  let studentsFirstName = "William";
  let GPA = 3.9;

  //dates obj
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();

  return (
    <>
      <div id="workHeader" className="flex justify-between w-full">
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
        className="px-[2rem] py-[2rem] text-[1.25rem] flex justify-between items-end h-[80%]"
      >
        <div id="countdown" className="flex flex-col items-center gap-[1rem]">
          <p>Days till Graduation</p>
          <div className="bg-white h-[15rem] w-[15rem]"></div>
        </div>
        <div
          id="GPA"
          className="flex flex-col items-center gap-[1rem] pb-[4rem]"
        >
          <p>{`Current GPA : ${GPA}`}</p>
          <div className="bg-white h-[18rem] w-[18rem] rounded-[10rem]"></div>
        </div>
        <div id="assignments" className="flex flex-col items-center gap-[1rem]">
          <p>Upcoming Assignments</p>
          <div className="bg-white h-[15rem] w-[15rem]"></div>
        </div>
      </div>
    </>
  );
};
export default StudentsLanding;
