import React, { createContext, useState } from "react";
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <LandingPageContext.Provider value={{isDarkMode, setIsDarkMode}}>
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
