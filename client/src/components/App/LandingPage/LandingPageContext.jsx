import React, { createContext, useState, useEffect, useContext } from "react";
const LandingPageContext = createContext();
import AuthContext from "../AuthFolder/authcontext";
import { io } from "socket.io-client";

export const LandingPageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);
  const [countdown, setCountdown] = useState(117);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { currentProfile } = useContext(AuthContext);
  const [currentStudent, setCurrentStudent] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [studentAssignments, setStudentAssignments] = useState([]);
  const [isCohorts, setCurrentCohort] = useState([]);
  const [saData, setSaData] = useState([]);
  const [chatname, setChatname] = useState('');
  const [room, setRoom] = useState('')
  const [chatOpen, setChatOpen] = useState(false);
  const [chatLarge, setChatLarge] = useState(false);
  const [messages, setMessages] = useState([]); 

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

  //grab all cohorts
  const getCohort = async () => {
    try {
      let res = await fetch(`${localURL}/cohorts/`);
      let cohortData = res.json();
      setCurrentCohort(cohortData);
      // console.log(cohortData);
      if (!res.ok) {
        throw new Error(`Cohort not found, status: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem finding the Cohorts:", error.message);
    }
  };
  useEffect(() => {
    getCohort();
  }, []);

  let daysMissed = 0;
  let cohortNumber = 0;
  let userFirstName = "";
  let userLastName = "";
  let username = "";
  let studentId;

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
    studentId = currentStudent[0].studentid;
  }

  const getAssignments = async () => {
    try {
      let res = await fetch(`${localURL}/assignments/${cohortNumber}`);
      let assignments = await res.json();
      setStudentAssignments(assignments);
      if (!res.ok) {
        throw new Error("Response not ok");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAssignments();
  }, [currentStudent]);

  const getSaData = async () => {
    try {
      let res = await fetch(`${localURL}/students_assignments/${studentId}`);
      let sa = await res.json();
      setSaData(sa);
      if (!res.ok) {
        throw new Error("Response not ok");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSaData();
  }, [currentStudent]);

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

  const socket = io("http://localhost:4000");
  const socketPasser = () => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
  };
  socketPasser();
  useEffect(() => {
    if (username) {
      setChatname(username);
      setRoom("123");
    }
  }, [username]);
  return (
    <LandingPageContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        daysOfWeek,
        monthNames,
        profileMenu,
        setProfileMenu,
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
        currentStudent,
        socketPasser,
        socket,
        chatname,
        setChatname,
        chatOpen,
        setChatOpen,
        chatLarge,
        setChatLarge,
        messages,
        setMessages,
        studentAssignments,
        saData,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
