import React from "react";
const ProfileOpen = () => {
  const username = "Willy";
  
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
          <button className="cursor-pointer">Sign Out</button>
        </div>
        <button id="deleteAccount" className="flex bg-[#ff24249e]  px-[0.25rem] rounded-xl  justify-center ">
          <p className="text-center">Delete Account</p>
        </button>
      </div>
    </>
  );
};
export default ProfileOpen;
