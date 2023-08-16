import React from "react";
const ProfileOpen = () => {
  const username = "Willy";
  return (
    <>
      <div className="flex flex-col gap-[0.5rem] pb-[2rem]">
        <div id="username">
          <p className="text-center">{username}</p>
        </div>
        <div id="changePassword">
          <p>change password</p>
        </div>
        <button id="deleteAccount" className="flex bg-[#ff24249e]  px-[0.25rem] rounded-xl  justify-center ">
          <p className="text-center">delete account</p>
        </button>
      </div>
    </>
  );
};
export default ProfileOpen;
