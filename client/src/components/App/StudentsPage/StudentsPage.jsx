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
    userFirstName,
    userLastName,
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
            <p className="text-[1.25rem] font-Sig">{`${userFirstName} ${userLastName}`}</p>
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
          className="flex justify-between pt-[2%] font-Sig h-[80%] "
        >
          <div
            id="navMenu"
            className=" flex flex-col h-full mr-[1rem] pt-[2rem] w-[10rem]"
          >
            <Link to="Assignments">
              <div
                id="assigmentsContainer"
                className="flex cursor-pointer flex-col p-[2rem] gap-[1rem] hover:bg-ContentBGDM"
              >
                {isDarkMode ? (
                  <img src={assignmentDM} alt="assignment icon" />
                ) : (
                  <img src={assignmentLM} alt="assignment icon" />
                )}
                <h2 className="text-[1.25rem] text-center ">Assignments</h2>
              </div>
            </Link>

            <Link to="Messages">
              <div
                id="messagesContainer"
                className="flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM"
              >
                {isDarkMode ? (
                  <img src={messagesDM} alt="messages icon" />
                ) : (
                  <img src={messagesLM} alt="chat bubble icon" />
                )}
                <h2 className="text-[1.25rem] text-center">Messages</h2>
              </div>
            </Link>
            <Link to="Calendar">
              <div
                id="calendarContainer"
                className="flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM"
              >
                {isDarkMode ? (
                  <img src={calendarDM} alt="calendar icon" />
                ) : (
                  <img src={calendarLM} alt="calendar icon" />
                )}
                <h2 className="text-[1.25rem]  text-center">Calendar</h2>
              </div>
            </Link>
            <Link to="Grades">
              <div
                id="gradesContainer"
                className=" cursor-pointer flex flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM"
              >
                {isDarkMode ? (
                  <img src={gradesDM} alt="gradebook icon" />
                ) : (
                  <img src={gradesLM} alt="gradebook icon" />
                )}
                <h2 className="text-[1.25rem]  text-center">Grades</h2>
              </div>
            </Link>
          </div>
          <div className="w-[100%] h-[100%] flex justify-center">
            <div
              id="workHub"
              className={
                isDarkMode
                  ? "bg-ContentBGDM h-full w-[90%] rounded-xl flex flex-col max-w-[1500px] mr-[11rem]"
                  : "bg-BGboxLM h-full w-[90%] rounded-xl flex flex-col max-w-[1500px] mr-[11rem]"
              }
            >
              <Outlet />
            </div>
          </div>
        </div>
        <div className="mt-[10rem] h-[1rem] flex justify-center font-robot ">
          <div className="flex flex-col items-start">
            <ul className="inline-block w-full text-xs">
              <li className="text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer">
                {" "}
                Privacy Policy{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1   after:content-['|'] cursor-pointer">
                {" "}
                Manage My Privacy{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1 after:content-['|'] cursor-pointer">
                {" "}
                Do Not Sell or Share My Data{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1   after:content-['|'] cursor-pointer">
                {" "}
                Legal{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1 after:content-['|'] cursor-pointer">
                {" "}
                Accessibility{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1 pl-1 after:content-['|'] cursor-pointer">
                {" "}
                Contact{" "}
              </li>
              <li className="text-black  hover:text-[#5a7a64] inline-block mr-1 cursor-pointer">
                Copyright © 2023 Insight Corporation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentsPage;
