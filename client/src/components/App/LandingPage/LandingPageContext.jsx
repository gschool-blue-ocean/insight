import React, { createContext, useState } from "react";
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStudents, setIsStudents] = useState(false);
  return (
    <LandingPageContext.Provider
      value={{ isDarkMode, setIsDarkMode, isStudents, setIsStudents }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
