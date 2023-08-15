import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
import StudentsLanding from "./StudentsLanding";
import Assignments from "../NavMenu/Assignments";
import LogoDM from "/assets/Logo/LogoDM.svg";
import LogoLM from "/assets/Logo/LogoLM.svg";
import ProfileCircleDM from "/assets/profileCircle/profileCircleDM.svg";
import ProfileCircleLM from "/assets/profileCircle/profileCircleLM.svg";
import ProfileCircleSmallLM from "/assets/profileCircle/profileCircleLMsmall.svg";
import ProfileCircleSmallDM from "/assets/profileCircle/profileCircleDMsmall.svg";
import assignmentDM from "/assets/assignment/assignmentDM.svg";
import assignmentLM from "/assets/assignment/assignmentLM.svg";
import messagesDM from "/assets/messages/chatLineDM.svg";
import messagesLM from "/assets/messages/chatLineLM.svg";
import calendarDM from "/assets/calendar/calendarDM.svg";
import calendarLM from "/assets/calendar/calendarLM.svg";
import gradesDM from "/assets/grades/gradesDM.svg";
import gradesLM from "/assets/grades/gradesLM.svg";
import toggleDM from "/assets/toggle/toggleOnOffDM.svg";
import toggleLM from "/assets/toggle/toggleOnOffLM.svg";
const StudentsPage = () => {
  const {
    isStudents,
    setIsStudents,
    profileMenu,
    setProfileMenu,
    isDarkMode,
    setIsDarkMode,
    isAssignments,
    setIsAssignments,
  } = useContext(LandingPageContext);

  //testdata
  let studentsFullName = "William Carrot";

  const switchScenes = () => {
    setIsStudents(false);
  };
  const openProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const selectAssignments = () => {
    setIsAssignments(!isAssignments);
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
                <img src={LogoDM} alt="Insight Logo" />
              ) : (
                <img src={LogoLM} alt="Insight Logo" />
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
              {isDarkMode ? (
                <img
                  src={ProfileCircleDM}
                  alt="profile circle"
                  onClick={openProfileMenu}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={ProfileCircleLM}
                  alt="profile circle"
                  onClick={openProfileMenu}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          {profileMenu ? (
            <div
              className={
                isDarkMode
                  ? "absolute h-[10rem] flex flex-col gap-[0.5rem] pl-[2rem] w-[15rem] right-3 bg-DGrayLogin rounded-xl text-white text-[1.5rem] pt-[1rem] border-black border-[1px]"
                  : "absolute h-[10rem] flex flex-col gap-[0.5rem] pl-[2rem] w-[15rem] right-3 bg-LGrayLogin rounded-xl text-black text-[1.5rem] pt-[1rem] border-black border-[1px]"
              }
            >
              <div id="mySettings" className="flex items-center gap-[0.5rem]">
                {isDarkMode ? (
                  <img src={ProfileCircleSmallDM} alt="profile icon" />
                ) : (
                  <img src={ProfileCircleSmallLM} alt="profile icon" />
                )}
                <p>My Profile</p>
              </div>
              <div id="themeToggle" className="flex items-center gap-[0.5rem]">
                {isDarkMode ? (
                  <img
                    src={toggleDM}
                    alt="toggle icon"
                    onClick={toggleTheme}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    src={toggleLM}
                    alt="toggle icon"
                    onClick={toggleTheme}
                    className="cursor-pointer"
                  />
                )}
                <p>Theme</p>
              </div>
              <div id="chatbot" className="flex gap-[0.5rem] items-center">
                {isDarkMode ? (
                  <img src={messagesDM} alt="messages icon" />
                ) : (
                  <img src={messagesLM} alt="messages icon" />
                )}
                <p>Chat</p>
              </div>
            </div>
          ) : null}
          <div id="contentContainer" className="flex pt-[5%] h-[80%] font-Sig">
            <div
              id="navMenu"
              className="pl-[2rem] flex flex-col gap-[1.5rem] pt-[5rem]"
            >
              <div
                id="assigmentsContainer"
                className="flex gap-[1rem]"
                onClick={selectAssignments}
              >
                {isDarkMode ? (
                  <img src={assignmentDM} alt="assignment icon" />
                ) : (
                  <img src={assignmentLM} alt="assignment icon" />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Assignments</h2>
              </div>
              <div id="messagesContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img src={messagesDM} alt="messages icon" />
                ) : (
                  <img src={messagesLM} alt="chat bubble icon" />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Messages</h2>
              </div>
              <div id="calendarContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img src={calendarDM} alt="calendar icon" />
                ) : (
                  <img src={calendarLM} alt="calendar icon" />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Calendar</h2>
              </div>
              <div id="gradesContainer" className="flex gap-[1rem]">
                {isDarkMode ? (
                  <img src={gradesDM} alt="gradebook icon" />
                ) : (
                  <img src={gradesLM} alt="gradebook icon" />
                )}
                <h2 className="text-[1.5rem] cursor-pointer">Grades</h2>
              </div>
            </div>
            <div
              id="workHub"
              className={
                isDarkMode
                  ? "bg-ContentBGDM w-[70%] h-full rounded-xl ml-[5rem] flex flex-col"
                  : "bg-BGboxLM w-[70%] rounded-xl ml-[5rem] flex flex-col"
              }
            >
              {isAssignments ? <Assignments /> : <StudentsLanding />}
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default StudentsPage;
