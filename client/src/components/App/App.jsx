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
import { AuthProvider } from "./AuthFolder/authcontext";
import ProtectedRoute from "./AuthFolder/ProtectedRoute";
import AdminLandingPage from "./AdminPage/AdminLandingPage";
import InstructorPage from "./InstructorPage/InstructorPage";
import InstructorLanding from "./InstructorPage/InstructorLanding";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
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
              <Route element={<ProtectedRoute />}>
                <Route path="/Instructor" element={<InstructorPage />} >
                  <Route path="instructorHome" element={<InstructorLanding />}/>
                </Route>
                <Route path="/Admin" element={<AdminLandingPage />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </LandingPageProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
