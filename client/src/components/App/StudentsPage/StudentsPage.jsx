import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
const StudentsPage = () => {
  const { isStudents, setIsStudents } = useContext(LandingPageContext);
  const switchScenes = () => {
    setIsStudents(false);
  };
  if (!isStudents) {
    return (
      <>
        <div
          id="pageContainer"
          className="h-screen bg-center bg-cover bg-DGLogin"
        >
          <div id="header" className="flex justify-between">
            <div id="title" className="flex items-center pl-[2rem]">
              <img src="/assets/Logo/LogoDM.svg" alt="Insight Logo" />
              <h1
                onClick={switchScenes}
                className="font-bold text-white cursor-pointer text-[2rem]"
              >
                Insight
              </h1>
            </div>
            <div
              id="profileContainer"
              className="flex items-center flex-nowrap pr-[2rem] gap-[1rem]"
            >
              <p className="text-[1.25rem] text-white">Student Name</p>
              <img
                src="/assets/profileCircle/profileCircleDM.svg"
                alt="profile circle"
              />
            </div>
          </div>
          <div id="contentContainer">
            <div id="navMenu">
              <div id="assigmentsContainer" className="pl-[2rem]">
                <img src="" alt="" />
                <h2 className="text-[2rem] text-white">Assignments</h2>
              </div>
              <div id="messagesContainer" className="pl-[2rem]">
                <img src="" alt="" />
                <h2 className="text-[2rem] text-white">Messages</h2>
              </div>
              <div id="calendarContainer" className="pl-[2rem]">
                <img src="" alt="" />
                <h2 className="text-[2rem] text-white">Calendar</h2>
              </div>
              <div id="gradesContainer" className="pl-[2rem]">
                <img src="" alt="" />
                <h2 className="text-[2rem] text-white">Grades</h2>
              </div>
            </div>
            <div id="workHub"></div>
            <div id="spacer"></div>
          </div>
        </div>
      </>
    );
  }
};
export default StudentsPage;
