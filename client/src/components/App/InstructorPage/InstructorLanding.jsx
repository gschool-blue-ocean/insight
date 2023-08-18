import React, { useContext } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import alertDM from "/assets/alerts/alertDM.svg";
import alertLM from "/assets/alerts/alertLM.svg";

const InstructorLanding = () => {
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

  //testdata
  let daysMissed = 4;
  let cohortNumber = 22;
  let instructorsFirstName = "Nancy";
  let GPA = averageGrade;

  return (
    <>
      <div className="flex flex-col items-center justify-between font-robot">
        <div
          id="workHeader"
          className="flex justify-between items-center gap-6 border-b-2 border-DGLogin w-[90%] pb-[2rem] mb-[2rem]"
        >
          <h1 className="text-[3rem] pt-8 pl-[34rem]">{`Cohort ${cohortNumber}`}</h1>
          <div
            id="date"
            className="flex items-start pt-[1rem] pr-[1rem] gap-[1rem]"
          >
            <p>{`${daysOfWeek[dayOfWeek - 1]} ${monthNames[month]} ${day}, ${year}`}</p>
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
        className="px-[2rem] py-[2rem] text-[1.25rem] flex justify-between items-end h-[80%]"
      >
        <div id="countdown" className="flex flex-col items-center gap-[1rem]">
          <p>Days till Graduation</p>
          <div className="text-[8rem] font-bold border-black border-[3px] bg-DGLogin text-DOLogin rounded-md">
            <p className="font-robot p-[1rem]">{countdown}</p>
          </div>
        </div>
        <div
          id="npsdata"
          className="flex flex-col text-center items-center gap-[.5rem] mb-[6rem]"
        >
          <p>NPS Data</p>
          <div>
            <img
              src="/images/NPSChart.png"
              className="h-[580px] w-[680px]"
            ></img>
          </div>
        </div>
        <div id="GPA" className="flex flex-col items-center gap-[1rem]">
          <p>{`Current Cohort Average : ${GPA}%`}</p>
          <div className="bg-white h-[18rem] w-[18rem] rounded-[10rem]"></div>
        </div>
      </div>
    </>
  );
};
export default InstructorLanding;
