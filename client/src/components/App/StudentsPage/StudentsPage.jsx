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
import ChatBox from "../ChatBox.jsx";
import BG from "client/src/images/reversecity.jpg"

const StudentsPage = () => {
  const {
    profileMenu,
    setProfileMenu,
    isDarkMode,
    isProfileOpen,
    setIsProfileOpen,
    userFirstName,
    userLastName,
    chatOpen,
    chatLarge,
    setChatLarge,
    setChatOpen,
    messages,
    makeChatLarger,
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
            ? "h-screen text-white bg-center bg-cover"
            : "h-screen text-black bg-center bg-cover"
        }
        style={{
          backgroundImage: `url(${BG})`,
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
            <Link to="studentHome">
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
                className={
                  isDarkMode
                    ? "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM hover:bg-opacity-[0.75]"
                    : "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-[#afc9c2] hover:bg-opacity-[0.75]"
                }
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
                className={
                  isDarkMode
                    ? "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM hover:bg-opacity-[0.75]"
                    : "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-[#afc9c2] hover:bg-opacity-[0.75]"
                }
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
                className={
                  isDarkMode
                    ? "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-ContentBGDM hover:bg-opacity-[0.75]"
                    : "flex cursor-pointer flex-col gap-[1rem] p-[2rem] hover:bg-[#afc9c2] hover:bg-opacity-[0.75]"
                }
              >
                {isDarkMode ? (
                  <img src={calendarDM} alt="calendar icon" />
                ) : (
                  <img src={calendarLM} alt="calendar icon" />
                )}
                <h2 className="text-[1.25rem]  text-center">Calendar</h2>
              </div>
            </Link>
          </div>
          <div className="w-[100%] h-[100%] flex justify-center">
            <div
              id="workHub"
              className={
                isDarkMode
                  ? "bg-ContentBGDM bg-opacity-[0.75] h-full w-[90%] rounded-xl flex flex-col max-w-[1500px] mr-[11rem]"
                  : "bg-[#afc9c2] bg-opacity-[0.9] h-full w-[90%] rounded-xl flex flex-col max-w-[1500px] mr-[11rem]"
              }
            >
              <Outlet />
            </div>
          </div>
        </div>
        <div
          id="footer"
          className={
            isDarkMode
              ? " h-[1.2rem]  p-[1rem] fixed bottom-0 flex justify-center items-center w-full font-robot bg-DGLogin bg-opacity-[0.75]"
              : " h-[1.2rem] p-[1rem] fixed bottom-0 flex justify-center items-center w-full font-robot bg-[#afc9c2] bg-opacity-[0.75]"
          }
        >
          <div className="flex flex-col items-start">
            <ul className="inline-block w-full text-xs">
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Privacy Policy{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Manage My Privacy{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Do Not Sell or Share My Data{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Legal{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Accessibility{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                {" "}
                Contact{" "}
              </li>
              <li
                className={
                  isDarkMode
                    ? "text-black inline-block mr-1 hover:text-[#5a7a64] pl-1 after:content-['|'] cursor-pointer"
                    : "text-black inline-block mr-1 hover:text-LPLogin pl-1 after:content-['|'] cursor-pointer"
                }
              >
                Copyright © 2023 Insight Corporation
              </li>
            </ul>
          </div>
          {chatOpen ? (
            <div
              id="chatFunction"
              className="ml-[3rem] bg-DGLogin border-LGLogin border-[2px] w-[10rem] flex justify-center absolute right-[5%] cursor-pointer rounded-md"
              onClick={makeChatLarger}
            >
              <p className="text-black">Insight Chat</p>
            </div>
          ) : null}
          <div className="h-[300px] absolute right-[5%] bottom-[3rem]">
            {" "}
            {chatLarge ? <ChatBox /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentsPage;
