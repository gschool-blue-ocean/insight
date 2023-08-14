import React from "react";
import LoginLandingPage from "./LandingPage/LoginLandingPage"
import { LandingPageProvider } from './LandingPage/LandingPageContext'
const App = () => {
  

  return (
    <>
    <LandingPageProvider>
      <LoginLandingPage />
    </LandingPageProvider>
    </>
  );
};

export default App;
