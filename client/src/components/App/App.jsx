import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./AuthFolder/ProtectedRoute.jsx";
import LoginLandingPage from "./LandingPage/LoginLandingPage";
import { LandingPageProvider } from "./LandingPage/LandingPageContext";
import StudentsPage from "./StudentsPage/StudentsPage";
import StudentsLanding from "./StudentsPage/StudentsLanding";
import Assignments from "./NavMenu/Assignments";
import Grades from "./NavMenu/Grades";
import Calendar from "./NavMenu/Calendar";
import Messages from "./NavMenu/Messages";
import Error from "../Error";
import { AuthProvider } from "./AuthFolder/authcontext";
import ProtectedRoute from "./AuthFolder/ProtectedRoute";
import AdminLandingPage from "./AdminPage/AdminLandingPage";
import InstructorLandingPage from "./InstructorPage/InstructorLandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LandingPageProvider>

          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginLandingPage />} />
              <Route path="students" element={<StudentsPage />}>
                <Route path="studentHome" element={<StudentsLanding />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Grades" element={<Grades />} />
                <Route path="Messages" element={<Messages />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/Instructor" element={<InstructorLandingPage />} />
                <Route path="/Admin" element={<AdminLandingPage />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </AuthProvider>

        </LandingPageProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
