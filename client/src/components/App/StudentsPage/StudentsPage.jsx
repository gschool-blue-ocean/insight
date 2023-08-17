import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileClosed from "./Profile/ProfileClosed";
import ProfileOpen from "./Profile/ProfileOpen";
import LogoDM from "/assets/Logo/LogoDM.svg";
import LogoLM from "/assets/Logo/LogoLM.svg";
import studentAvatar from "/assets/studentAvatar.svg";
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

const StudentsPage = () => {
  const {
    profileMenu,
    setProfileMenu,
    isDarkMode,
    isProfileOpen,
    setIsProfileOpen,
    studentsFirstName,
    studentsLastName
  } = useContext(LandingPageContext);

  const openProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const openProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

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
            <Link to="/">
              <h1 className="font-bold cursor-pointer text-[2rem] font-title">
                Insight
              </h1>
            </Link>
          </div>
          <div
            id="profileContainer"
            className="flex items-center flex-nowrap pr-[2rem] gap-[1rem]"
          >
            <p className="text-[1.25rem] font-Sig">{`${studentsFirstName} ${studentsLastName}`}</p>
            {isDarkMode ? (
              <img
                src={studentAvatar}
                alt="profile circle"
                onClick={openProfileMenu}
                className="cursor-pointer"
              />
            ) : (
              <img
                src={studentAvatar}
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
                ? "absolute  flex flex-col gap-[.5rem] items-start pl-[2%] w-[15rem] right-3 bg-DGrayLogin rounded-xl text-white text-[1.5rem] pt-[1rem] border-black border-[1px]"
                : "absolute  flex flex-col gap-[.5rem] items-start pl-[2%] w-[15rem]  right-3 bg-LGrayLogin rounded-xl text-black text-[1.5rem] pt-[1rem] border-black border-[1px]"
            }
          >
            <div id="myProfile" className="flex items-center gap-[0.5rem]">
              {isDarkMode ? (
                <img src={ProfileCircleSmallDM} alt="profile icon" />
              ) : (
                <img src={ProfileCircleSmallLM} alt="profile icon" />
              )}
              <p className="cursor-pointer" onClick={openProfile}>
                My Profile
              </p>
            </div>
            {isProfileOpen ? <ProfileOpen /> : <ProfileClosed />}
          </div>
        ) : null}
        <div
          id="contentContainer"
          className="flex justify-center pt-[5%] h-[80%] font-Sig"
        >
          <div
            id="navMenu"
            className="pl-[2rem] flex flex-col gap-[1.5rem] pt-[5rem]"
          >
            <div id="assigmentsContainer" className="flex gap-[1rem]">
              {isDarkMode ? (
                <img src={assignmentDM} alt="assignment icon" />
              ) : (
                <img src={assignmentLM} alt="assignment icon" />
              )}
              <Link to="Assignments">
                <h2 className="text-[1.5rem] cursor-pointer">Assignments</h2>
              </Link>
            </div>
            <div id="messagesContainer" className="flex gap-[1rem]">
              {isDarkMode ? (
                <img src={messagesDM} alt="messages icon" />
              ) : (
                <img src={messagesLM} alt="chat bubble icon" />
              )}
              <Link to="Messages">
                <h2 className="text-[1.5rem] cursor-pointer">Messages</h2>
              </Link>
            </div>
            <div id="calendarContainer" className="flex gap-[1rem]">
              {isDarkMode ? (
                <img src={calendarDM} alt="calendar icon" />
              ) : (
                <img src={calendarLM} alt="calendar icon" />
              )}
              <Link to="Calendar">
                <h2 className="text-[1.5rem] cursor-pointer">Calendar</h2>
              </Link>
            </div>
            <div id="gradesContainer" className="flex gap-[1rem] pl-[2.5px]">
              {isDarkMode ? (
                <img src={gradesDM} alt="gradebook icon" />
              ) : (
                <img src={gradesLM} alt="gradebook icon" />
              )}
              <Link to="Grades">
                <h2 className="text-[1.5rem] cursor-pointer">Grades</h2>
              </Link>
            </div>
          </div>
          <div
            id="workHub"
            className={
              isDarkMode
                ? "bg-ContentBGDM w-[70%] h-full rounded-xl ml-[5rem] flex flex-col max-w-[1500px]"
                : "bg-BGboxLM w-[70%] h-full rounded-xl ml-[5rem] flex flex-col max-w-[1500px]"
            }
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentsPage;
