import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
const StudentsPage = () => {
  const {
    isStudents,
    setIsStudents,
    monthNames,
    daysOfWeek,
    profileMenu,
    setProfileMenu,
    isDarkMode,
    setIsDarkMode,
  } = useContext(LandingPageContext);
  console.log(isDarkMode);
  console.log(isStudents);
  //testdata
  let daysMissed = 69;
  let cohortNumber = 69;
  let studentsFirstName = "William";
  let studentsFullName = "William Carrot";
  let GPA = 4.2;

  //dates obj
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();

  const switchScenes = () => {
    setIsStudents(false);
  };
  const openProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  if (isStudents) {
    return (
      <>
        <div
          id="pageContainer"
          className={
            isDarkMode
              ? "h-screen text-white bg-center bg-cover bg-DGLogin"
              : "h-screen text-black bg-center bg-cover bg-LGLogin"
          }
        >
          <div id="header" className="flex justify-between">
            <div id="title" className="flex items-center pl-[2rem]">
              {isDarkMode ? (
                <img src="/assets/Logo/LogoDM.svg" alt="Insight Logo" />
              ) : (
                <img src="/assets/Logo/LogoLM.svg" alt="Insight Logo" />
              )}
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
              <p className="text-[1.25rem] font-Sig">{`${studentsFullName}`}</p>
              <img
                src="/assets/profileCircle/profileCircleDM.svg"
                alt="profile circle"
                onClick={openProfileMenu}
                className="cursor-pointer"
              />
            </div>
          </div>
          {profileMenu ? (
            <div
              className={
                isDarkMode
                  ? "absolute h-[10rem] flex flex-col gap-[0.5rem] pl-[2rem] w-[15rem] right-3 bg-DGrayLogin rounded-xl text-white text-[1.5rem] pt-[1rem]"
                  : "absolute h-[10rem] flex flex-col gap-[0.5rem] pl-[2rem] w-[15rem] right-3 bg-LGrayLogin rounded-xl text-black text-[1.5rem] pt-[1rem]"
              }
            >
              <div id="mySettings" className="flex items-center gap-[0.5rem]">
                {isDarkMode ? (
                  <img
                    src="/assets/profileCircle/profileCircleDMsmall.svg"
                    alt="profile icon"
                  />
                ) : (
                  <img
                    src="/assets/profileCircle/profileCircleLMsmall.svg"
                    alt="profile icon"
                  />
                )}
                <p>My Profile</p>
              </div>
              <div id="themeToggle" className="flex items-center gap-[0.5rem]">
                {isDarkMode ? (
                  <img
                    src="/assets/toggle/toggleOnOffDM.svg"
                    alt="toggle icon"
                    onClick={toggleTheme}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    src="/assets/toggle/toggleOnOffLM.svg"
                    alt="toggle icon"
                    onClick={toggleTheme}
                    className="cursor-pointer"
                  />
                )}
                <p>Theme</p>
              </div>
              <div id="chatbot" className="flex gap-[0.5rem] items-center">
                {isDarkMode ? (
                  <img
                    src="/assets/messages/chatLineDM.svg"
                    alt="messages icon"
                  />
                ) : (
                  <img
                    src="/assets/messages/chatLineLM.svg"
                    alt="messages icon"
                  />
                )}
                <p>Chat</p>
              </div>
            </div>
          ) : null}
          <div id="contentContainer" className="flex pt-[10%] h-[80%] font-Sig">
            <div
              id="navMenu"
              className="pl-[2rem] flex flex-col gap-[1.5rem] pt-[5rem]"
            >
              <div id="assigmentsContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img
                    src="/assets/assignment/assignmentDM.svg"
                    alt="assignment icon"
                  />
                ) : (
                  <img
                    src="/assets/assignment/assignmentLM.svg"
                    alt="assignment icon"
                  />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Assignments</h2>
              </div>
              <div id="messagesContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img
                    src="/assets/messages/chatLineDM.svg"
                    alt="messages icon"
                  />
                ) : (
                  <img
                    src="/assets/messages/chatLineLM.svg"
                    alt="chat bubble icon"
                  />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Messages</h2>
              </div>
              <div id="calendarContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img
                    src="/assets/calendar/calendarDM.svg"
                    alt="calendar icon"
                  />
                ) : (
                  <img
                    src="/assets/calendar/calendarLM.svg"
                    alt="calendar icon"
                  />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Calendar</h2>
              </div>
              <div id="gradesContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img src="/assets/grades/gradesDM.svg" alt="gradebook icon" />
                ) : (
                  <img src="/assets/grades/gradesLM.svg" alt="gradebook icon" />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Grades</h2>
              </div>
            </div>
            <div
              id="workHub"
              className={isDarkMode ? "bg-ContentBGDM w-[70%] rounded-xl ml-[5rem] flex flex-col" : "bg-BGboxLM w-[70%] rounded-xl ml-[5rem] flex flex-col"}
            >
              <div id="workHeader" className="flex justify-between w-full">
                <div
                  id="attendanceContainer"
                  className="pl-[2rem] pt-[1rem] mr-[9%]"
                >
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
                    <img
                      src="/assets/alerts/alertDM.svg"
                      alt="notification bell"
                    />
                  ) : (
                    <img
                      src="/assets/alerts/alertLM.svg"
                      alt="notification bell"
                    />
                  )}
                </div>
              </div>
              <div
                id="analyticsContainer"
                className="px-[2rem] py-[2rem] text-[1.25rem] flex justify-between items-end h-[80%]"
              >
                <div
                  id="countdown"
                  className="flex flex-col items-center gap-[1rem]"
                >
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
                <div
                  id="assignments"
                  className="flex flex-col items-center gap-[1rem]"
                >
                  <p>Upcoming Assignments</p>
                  <div className="bg-white h-[15rem] w-[15rem]"></div>
                </div>
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
