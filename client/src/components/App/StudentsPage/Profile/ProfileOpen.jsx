import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import AuthContext from '../../AuthFolder/authcontext.jsx'
import LandingPageContext from "../../LandingPage/LandingPageContext.jsx";



const ProfileOpen = () => {

  const { setProfileMenu,currentUser, currentStudent, username } = useContext(LandingPageContext)
  const { logoutProfile } = useContext(AuthContext)

  const handleLogout = () => {
    setProfileMenu(false)
    logoutProfile()
  }
  if(currentStudent && currentUser) {
    console.log(currentUser)
    console.log(currentStudent)
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
          <Link to='/'>
            <button onClick={handleLogout}>Sign Out</button>
          </Link>
        </div>
        <button id="deleteAccount" className="flex bg-[#ff24249e]  px-[0.25rem] rounded-xl  justify-center ">
          <p className="text-center">Delete Account</p>
        </button>
      </div>
    </>
  );
};
export default ProfileOpen;
