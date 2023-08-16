import React, { createContext, useState, useEffect } from "react";
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStudents, setIsStudents] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [isAssignments, setIsAssignments] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);
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
  const tableData = [
    { title: "Project A", grade: "93%" },
    { title: "Test Alpha", grade: "67%" },
    { title: "Essay I", grade: "88%" },
    { title: "Quiz X", grade: "99%" },
    { title: "Homework 5", grade: "91%" },
    { title: "Exam II", grade: "77%" },
    { title: "Lab 3", grade: "70%" },
    { title: "Report Z", grade: "84%" },
    { title: "Task 4", grade: "94%" },
    { title: "Module Test", grade: "92%" },
    { title: "Presentation 1", grade: "100%" },
    { title: "Fieldwork", grade: "79%" },
    { title: "Study II", grade: "86%" },
    { title: "Workshop 3", grade: "76%" },
    { title: "Activity B", grade: "89%" },
  ];
  const determineAverage = () => {
    let totalGrade = 0;
    tableData.forEach((item) => {
      const grade = parseInt(item.grade, 10);
      totalGrade += grade;
    });
    const averageGrade = totalGrade / tableData.length;
    let roundedGrade = parseFloat(averageGrade.toFixed(2));
    setAverageGrade(roundedGrade);
  };
  useEffect(() => {
    determineAverage();
}, []);
  return (
    <LandingPageContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        daysOfWeek,
        monthNames,
        profileMenu,
        setProfileMenu,
        isAssignments,
        setIsAssignments,
        averageGrade,
        tableData
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
