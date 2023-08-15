import React, { createContext, useState } from "react";
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStudents, setIsStudents] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <LandingPageContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isStudents,
        setIsStudents,
        daysOfWeek,
        monthNames,
        profileMenu,
        setProfileMenu
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
