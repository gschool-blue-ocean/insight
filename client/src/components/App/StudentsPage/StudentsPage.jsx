import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
const StudentsPage = () => {
  const { isStudents, setIsStudents,monthNames,daysOfWeek } = useContext(LandingPageContext);
  let daysMissed = 69;
  let cohortNumber = 69;
  let studentsFirstName = "William";
  let studentsFullName = "William Carrot";

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();

  
  const switchScenes = () => {
    setIsStudents(false);
  };
  if (!isStudents) {
    return (
      <>
        <div
          id="pageContainer"
          className="h-screen text-white bg-center bg-cover bg-DGLogin"
        >
          <div id="header" className="flex justify-between">
            <div id="title" className="flex items-center pl-[2rem]">
              <img src="/assets/Logo/LogoDM.svg" alt="Insight Logo" />
              <h1
                onClick={switchScenes}
                className="font-bold cursor-pointer text-[2rem] font-title"
              >
                Insight
              </h1>
            </div>
            <div
              id="profileContainer"
              className="flex items-center flex-nowrap pr-[2rem] gap-[1rem]"
            >
              <p className="text-[1.25rem font-Sig">{`${studentsFullName}`}</p>
              <img
                src="/assets/profileCircle/profileCircleDM.svg"
                alt="profile circle"
              />
            </div>
          </div>
          <div id="contentContainer" className="flex pt-[15%] h-[70%] font-Sig">
            <div
              id="navMenu"
              className="pl-[2rem] flex flex-col gap-[1.5rem] pt-[5rem]"
            >
              <div id="assigmentsContainer" className="flex gap-[1rem]">
                <img
                  src="/assets/assignment/assignmentDM.svg"
                  alt="assignment icon"
                />
                <h2 className="text-[1.5rem]">Assignments</h2>
              </div>
              <div id="messagesContainer" className="flex gap-[1rem]">
                <img
                  src="/assets/messages/chatLineDM.svg"
                  alt="messages icon"
                />
                <h2 className="text-[1.5rem]">Messages</h2>
              </div>
              <div id="calendarContainer" className="flex gap-[1rem]">
                <img
                  src="/assets/calendar/calendarDM.svg"
                  alt="calendar icon"
                />
                <h2 className="text-[1.5rem]">Calendar</h2>
              </div>
              <div id="gradesContainer" className="flex gap-[1rem]">
                <img src="/assets/grades/gradesDM.svg" alt="gradebook icon" />
                <h2 className="text-[1.5rem]">Grades</h2>
              </div>
            </div>
            <div
              id="workHub"
              className="bg-ContentBGDM w-[70%] rounded-xl ml-[5rem]"
            >
              <div id="workHeader" className="flex justify-between w-full">
                <div id="attendanceContainer" className="pl-[2rem] pt-[1rem] pr-[3rem]">
                  <p>Attendance</p>
                  <div id="checkInContainer" className="flex gap-[0.5rem]">
                    <input type="checkbox" />
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
                <div id="date" className="flex items-start pt-[1rem] pr-[1rem] gap-[1rem]">
                  <p>{`${daysOfWeek[dayOfWeek]} ${monthNames[month]} ${day}, ${year}`}</p>
                  <img src="/assets/alerts/alertDM.svg" alt="notification bell" />
                </div>
              </div>
              <div id="analyticsContainer">
                <div id="countdown"></div>
                <div id="GPA"></div>
                <div id="assignments"></div>
              </div>
            </div>
            <div id="spacer"></div>
          </div>
        </div>
      </>
    );
  }
};
export default StudentsPage;
