import React, { useState, useContext } from "react";
import LandingPageContext from "./LandingPage/LandingPageContext";

return (
  <div>
    <h3> Join Chat</h3>
    {/* <input
      type="text"
      placeholder="Enter name here"
      onChange={(e) => {
        setChatname(e.target.value);
      }}
    /> */}
    {/* <input
      type="text"
      placeholder="Room ID"
      onChange={(e) => {
        setRoom(e.target.value);
      }}
    /> */}
    <button onClick={joinRoom}>Join A Room</button>
  </div>
);
