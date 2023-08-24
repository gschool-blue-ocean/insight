import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthFolder/authcontext.jsx";
import LandingPageContext from "../../LandingPage/LandingPageContext.jsx";

const ProfileOpen = () => {
  const {
    setProfileMenu,
    currentUser,
    currentStudent,
    username,
    setChatLarge,
    setChatOpen,
    setMessages,
    socket,
  } = useContext(LandingPageContext);
  const { logoutProfile } = useContext(AuthContext);

  const handleLogout = () => {
    setProfileMenu(false);
    setChatOpen(false);
    setChatLarge(false);
    setMessages([]);
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    logoutProfile();
  };
  if (currentStudent && currentUser) {
    console.log(currentUser);
    console.log(currentStudent);
  }

  return (
    <>
      <div className="flex flex-col gap-[0.5rem] pb-[2rem] items-center text-[1.25rem]">
        <div id="username">
          <p>{username}</p>
        </div>
        <div id="changePassword">
          <p>Change Password</p>
        </div>
        <div>
          <Link to="/">
            <button onClick={handleLogout}>Sign Out</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProfileOpen;
