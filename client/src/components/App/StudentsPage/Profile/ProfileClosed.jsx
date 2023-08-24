import React, { useContext } from "react";
import LandingPageContext from "../../LandingPage/LandingPageContext";
import toggleDM from "/assets/toggle/toggleOnOffDM.svg";
import toggleLM from "/assets/toggle/toggleOnOffLM.svg";
import toggleOFF from "/assets/toggle/toggleOFF.svg";
import messagesDM from "/assets/messages/chatLineDMmenu.svg";
import messagesLM from "/assets/messages/chatLineLMmenu.svg";
const ProfileClosed = () => {
  const { isDarkMode, setIsDarkMode, isChatOpen, setIsChatOpen } =
    useContext(LandingPageContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const openChat = () => {
    setIsChatOpen(!isChatOpen);
  };
    return (
      <>
        <div className="pb-[1rem]">
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
                src={toggleOFF}
                alt="toggle icon"
                onClick={toggleTheme}
                className="cursor-pointer"
              />
            )}
            <p>Theme</p>
          </div>
          <div
            id="chat"
            className="flex items-center gap-[0.5rem] justify-start"
          >
            {isDarkMode ? (
              <img src={messagesDM} alt="messages icon" />
            ) : (
              <img src={messagesLM} alt="messages icon" />
            )}
            <p onClick={openChat} className="cursor-pointer">
              Chat
            </p>
          </div>
        </div>
      </>
    );
};
export default ProfileClosed;
