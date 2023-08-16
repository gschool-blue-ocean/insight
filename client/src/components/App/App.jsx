import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLandingPage from "./LandingPage/LoginLandingPage";
import { LandingPageProvider } from "./LandingPage/LandingPageContext";
import StudentsPage from "./StudentsPage/StudentsPage";
import StudentsLanding from "./StudentsPage/StudentsLanding";
import Assignments from "./NavMenu/Assignments";
import Grades from "./NavMenu/Grades";
import Calendar from "./NavMenu/Calendar";
import Messages from "./NavMenu/Messages";
import Error from "../Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LandingPageProvider>
          <Routes>
            <Route path="/" element={<LoginLandingPage />} />
            <Route path="students" element={<StudentsPage />}>
              <Route path="studentHome" element={<StudentsLanding />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Calendar" element={<Calendar />} />
              <Route path="Grades" element={<Grades />} />
              <Route path="Messages" element={<Messages />} />
            </Route>
            {/* <ProtectedRoute>
              <Route path="Instructor" element={<InstructorPage />}>
              <Route path="InstructorHome" element={<InstructorLanding />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Calendar" element={<Calendar />} />
              <Route path="Grades" element={<Grades />} />
              <Route path="Messages" element={<Messages />} />
              <Route path="Students" element={<Students />} />
              </Route>
            </ProtectedRoute>
            <ProtectedRoute>
              <Route path="Admin" element={<AdminPage />}>
              <Route path="AdminHome" element={<AdminLanding />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Calendar" element={<Calendar />} />
              <Route path="Grades" element={<Grades />} />
              <Route path="Messages" element={<Messages />} />
              <Route path="Students" element={<Students />} />
              <Route path="Instructors" element={<Instructors />} />
              </Route>
            </ProtectedRoute> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </LandingPageProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
