import React, {useContext} from "react";
import AuthContext from '../../AuthFolder/authcontext.jsx'


const ProfileOpen = () => {
  const username = "Willy";

  const { logoutProfile } = useContext(AuthContext)

  const handleLogout = () => {
    logoutProfile()
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
          <button onClick={handleLogout}>Sign Out</button>
        </div>
        <button id="deleteAccount" className="flex bg-[#ff24249e]  px-[0.25rem] rounded-xl  justify-center ">
          <p className="text-center">Delete Account</p>
        </button>
      </div>
    </>
  );
};
export default ProfileOpen;
