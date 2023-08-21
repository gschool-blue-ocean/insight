import React, { createContext, useState, useEffect, useContext } from "react";
const LandingPageContext = createContext();
import AuthContext from "../AuthFolder/authcontext";
export const LandingPageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);
  const [countdown, setCountdown] = useState(117);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { currentProfile } = useContext(AuthContext);
  const [currentStudent, setCurrentStudent] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const getUserData = async () => {
    try {
      let response = await fetch(`${localURL}/users/${currentProfile.userid}`);

      if (!response.ok) {
        throw new Error(`User not found, Status: ${response.status}`);
      }

      let student = await response.json();
      setCurrentUser(student);
    } catch (error) {
      console.error("There was a problem finding this user:", error.message);
    }
  };
  useEffect(() => {
    getUserData();
  }, [currentProfile]);

  const getStudentData = async () => {
    try {
      let response = await fetch(
        `${localURL}/students/${currentProfile.userid}`
      );

      if (!response.ok) {
        throw new Error(`Student not found, Status: ${response.status}`);
      }

      let student = await response.json();
      setCurrentStudent(student);
    } catch (error) {
      console.error("There was a problem finding this student:", error.message);
    }
  };
  useEffect(() => {
    getStudentData();
  }, [currentProfile]);

  let daysMissed = 0;
  let cohortNumber = 0;
  let userFirstName = "";
  let userLastName = "";
  let username = "";

  if (currentUser[0]) {
    userFirstName = currentUser[0].firstname;
    userLastName = currentUser[0].lastname;
    username = currentUser[0].username;
  }
  if (currentStudent[0]) {
    if (!currentStudent[0].days_absent) {
      daysMissed = 0;
    } else {
      daysMissed = currentStudent[0].days_absent;
    }
    cohortNumber = currentStudent[0].cohortid;
  }
  const localURL = "http://localhost:10000";
  //dates obj
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth();
  const day = todayDate.getDate();
  const dayOfWeek = todayDate.getDay();

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
  
  const startDate = new Date(2023, 7, 16);
  const currentDate = new Date();
  const changeCountdown = () => {
    currentDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 117);
    let millisUntil = endDate - currentDate;
    let daysUntil = millisUntil / 86400000;
    setCountdown(Math.floor(daysUntil));
  };

  useEffect(() => {
    determineAverage();
    changeCountdown();
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
        averageGrade,
        tableData,
        countdown,
        setCountdown,
        year,
        month,
        day,
        dayOfWeek,
        isProfileOpen,
        setIsProfileOpen,
        localURL,
        daysMissed,
        cohortNumber,
        userFirstName,
        userLastName,
        username,
        currentStudent
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
