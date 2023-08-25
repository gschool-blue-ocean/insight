import React, { useContext, useState, useEffect } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
import alertDM from "/assets/alerts/alertDM.svg";
import alertLM from "/assets/alerts/alertLM.svg";
import CohortName from "../AdminPage/CohortList";
import { Chart as ChartJS } from "chart.js";
import Chart from "chart.js/auto";

const InstructorLanding = () => {
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
  } = useContext(LandingPageContext);

  isDarkMode
    ? (ChartJS.defaults.color = "#ffffff")
    : (ChartJS.defaults.color = "#000000");

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Fetch student data from the API
    fetch("https://insight-uqbc.onrender.com/students")
      .then((response) => response.json())
      .then((data) => {
        // Filter students from cohort ID 1
        const cohort1Students = data.filter(
          (student) => student.cohortid === 1
        );

        // Extract nps_rating values
        const npsData = cohort1Students.map((student) => ({
          x: student.studentid, // Use student ID as the x value
          y: student.nps_rating,
          r: 10, // Radius of the bubble
        }));

        setStudentData(npsData);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  useEffect(() => {
    // Create the bubble chart
    const ctx = document.getElementById("bubbleChart");

    if (studentData.length > 0) {
      new Chart(ctx, {
        type: "bubble",
        data: {
          datasets: [
            {
              label: "NPS Ratings",
              data: studentData,
              backgroundColor: "rgba(173, 150, 78, 0.6)",
              borderColor: "rgba(173, 150, 78, 2)",
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
          plugins: {
            title: {
              display: true,
              text: "NPS Ratings Bubble Chart",
              font: {
                size: 18,
              },
            },
          },
        },
      });
    }
  }, [studentData]);

  return (
    <>
      <div className="flex flex-col items-center justify-between font-robot">
        <div
          id="workHeader"
          className="flex justify-between items-center  text-center border-b-2 border-DGLogin border-opacity-[0.8] w-[90%] pb-[2rem] mb-[2rem]"
        >
          <div id="spacer"></div>
          {/* Dropdown Menu */}
          <div className="flex flex-col items-center text-[2.5rem] pt-8 pl-[15rem]">
            <label htmlFor="cohortSelect" className="mb-2">
              Select Cohort:
            </label>
            <CohortName />
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
        className="px-[2rem] py-[2rem] text-[1.25rem] flex justify-between items-start max-h-[fit-content]"
      >
        <div
          id="countdown"
          className="flex flex-col items-center w-1/2 gap-[1rem]"
        >
          <p>Days till Graduation</p>
          <div className="text-[8rem] font-bold border-[#77877c] border-[3px] bg-[#666f69] text-[#d2af6b] rounded-md">
            <p className="font-robot p-[1rem]">{countdown}</p>
          </div>
        </div>
        <div
          id="npsdata"
          className="flex flex-col text-center items-center mb-[10rem]"
        >
          <div>
            <canvas id="bubbleChart" width={600} height={400} />
          </div>
        </div>
      </div>
    </>
  );
};
export default InstructorLanding;
