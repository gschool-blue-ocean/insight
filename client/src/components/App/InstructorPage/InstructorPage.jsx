import LandingPageContext from "../LandingPage/LandingPageContext";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileClosed from "../StudentsPage/Profile/ProfileClosed";
import ProfileOpen from "../StudentsPage/Profile/ProfileOpen";
import LogoDM from "/assets/Logo/LogoDM.svg";
import LogoLM from "/assets/Logo/LogoLM.svg";
import instructorAvatar from "/assets/instructorAvatar.svg";
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
import studentsLM from "/assets/students/studentsLM.svg";
import studentsDM from "/assets/students/studentsDM.svg";

const InstructorPage = () => {
  const {
    profileMenu,
    setProfileMenu,
    setIsProfileOpen,
    isProfileOpen,
    isDarkMode,
    userFirstName,
    userLastName,
    setIsDarkMode,
  } = useContext(LandingPageContext);

  //testdata

  const openProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const openProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        id="pageContainer"
        className={
          isDarkMode
            ? "h-screen text-white bg-center bg-cover"
            : "h-screen text-black bg-center bg-cover"
        }
        style={{
          backgroundImage: `url('/images/reversecity.jpg')`,
          backgroundBlendMode: isDarkMode ? "multiply" : "screen",
          backgroundColor: isDarkMode
            ? "rgba(26, 61, 54, 0.9)"
            : "rgba(138, 145, 143, 0.9)",
        }}
      >
        <div
          id="header"
          className={
            isDarkMode
              ? "flex justify-between bg-DGLogin bg-opacity-[0.95]"
              : "flex justify-between bg-[#afc9c2] bg-opacity-[0.9]"
          }
        >
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
                src={instructorAvatar}
                alt="profile circle"
                onClick={openProfileMenu}
                className="cursor-pointer"
              />
            ) : (
              <img
                src={instructorAvatar}
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
                ? "absolute flex flex-col items-start gap-[0.5rem] pl-[2%] w-[15rem] right-3 bg-DGrayLogin rounded-xl text-white text-[1.5rem] pt-[1rem] border-black border-[1px]"
                : "absolute flex flex-col items-start gap-[0.5rem] pl-[2%] w-[15rem] right-3 bg-LGrayLogin rounded-xl text-black text-[1.5rem] pt-[1rem] border-black border-[1px]"
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
            <div id="gradesContainer" className="flex gap-[1rem] pl-1">
              {isDarkMode ? (
                <img src={gradesDM} alt="gradebook icon" />
              ) : (
                <img src={gradesLM} alt="gradebook icon" />
              )}
              <Link to="Grades">
                <h2 className="text-[1.5rem] cursor-pointer">Grades</h2>
              </Link>
            </div>
            <div id="studentsContainer" className="flex gap-[1rem]">
              {isDarkMode ? (
                <img src={studentsDM} alt="student icon" />
              ) : (
                <img src={studentsLM} alt="student icon" />
              )}
              <Link to="Students">
                <h2 className="text-[1.5rem] cursor-pointer">Students</h2>
              </Link>
            </div>
          </div>
          <div
            id="workHub"
            className={
              isDarkMode
                ? "bg-ContentBGDM bg-opacity-[0.75]  w-[70%] h-full rounded-xl ml-[5rem] flex flex-col max-w-[1500px]"
                : "bg-[#afc9c2] bg-opacity-[0.9] w-[70%]  h-full rounded-xl ml-[5rem] flex flex-col max-w-[1500px]"
            }
          >
            <Outlet />
          </div>
        </div>
        <div
          id="footer"
          className={
            isDarkMode
              ? "mt-[10rem] h-[1.2rem] flex justify-center w-full font-robot bg-DGLogin bg-opacity-[0.95]"
              : "mt-[10rem] h-[1.2rem] flex justify-center w-full font-robot bg-[#afc9c2] bg-opacity-[0.9]"
          }
        >
          <div className="flex flex-col items-start">
            <ul
              className={
                isDarkMode
                  ? "inline-block w-full text-xs text-white"
                  : "inline-block w-full text-xs text-black"
              }
            >
              <li className=" inline-block mr-1  pl-1 after:content-['|'] cursor-pointer">
                {" "}
                Privacy Policy{" "}
              </li>
              <li className="  inline-block mr-1   after:content-['|'] cursor-pointer">
                {" "}
                Manage My Privacy{" "}
              </li>
              <li className=" inline-block mr-1 after:content-['|'] cursor-pointer">
                {" "}
                Do Not Sell or Share My Data{" "}
              </li>
              <li className=" inline-block mr-1   after:content-['|'] cursor-pointer">
                {" "}
                Legal{" "}
              </li>
              <li className="inline-block mr-1 after:content-['|'] cursor-pointer">
                {" "}
                Accessibility{" "}
              </li>
              <li className=" inline-block mr-1 pl-1 after:content-['|'] cursor-pointer">
                {" "}
                Contact{" "}
              </li>
              <li className="inline-block mr-1 cursor-pointer">
                Copyright © 2023 Insight Corporation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstructorPage;
