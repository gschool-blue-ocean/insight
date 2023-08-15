import React from "react";
import LoginLandingPage from "./LandingPage/LoginLandingPage";
import { LandingPageProvider } from "./LandingPage/LandingPageContext";
import StudentsPage from "./StudentsPage/StudentsPage";
import Assignments from "./NavMenu/Assignments"
const App = () => {
  return (
    <>
      <LandingPageProvider>
        <LoginLandingPage />
        <StudentsPage />
      </LandingPageProvider>
    </>
  );
};

export default App;
