import { Link } from "react-router-dom";
import LandingPageContext from "./LandingPageContext";
import LogoDM from "/assets/Logo/LogoDM.svg";
import LogoLM from "/assets/Logo/LogoLM.svg";
import toggleDM from "/assets/toggle/toggleOnOffDM.svg";
import toggleLM from "/assets/toggle/toggleOnOffLM.svg";
import React, { useState, useContext } from "react";
import AuthContext from "../AuthFolder/authcontext";
import Footer from "./Footer";

const LoginLandingPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(LandingPageContext);
  const { loginProfile } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  function clearForm() {
    setFormData({
      username: "",
      password: "",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch("http://localhost:10000/login", options);
      const token = await response.json();
      loginProfile(token);
      clearForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <>
      <div
        id="pageContainer"
        className="bg-[url('/images/cityBackground.jpg')] bg-cover bg-center h-[98vh]"
      >
        <div
          className={
            isDarkMode
              ? `bg-DGLogin bg-opacity-[0.65] w-full h-screen flex justify-center items-center`
              : `bg-LGLogin bg-opacity-[0.45] w-full h-screen flex justify-center items-center`
          }
        >
          <div
            id="loginContainer"
            className={
              isDarkMode
                ? `w-1/2 bg-BGboxDM bg-opacity-[0.6] h-1/2 rounded-[3rem] flex justify-evenly items-center`
                : `w-1/2 bg-BGboxLM bg-opacity-[0.6] h-1/2 rounded-[3rem] flex justify-evenly items-center`
            }
          >
            <div
              id="toggleContainer"
              className="h-full flex flex-col justify-start pt-[2rem]"
            >
              {isDarkMode ? (
                <img
                  src={toggleDM}
                  alt="das toggle"
                  onClick={handleToggle}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={toggleLM}
                  alt="das toggle"
                  onClick={handleToggle}
                  className="cursor-pointer"
                />
              )}
            </div>
            <div
              id="loginBox"
              className="flex flex-col gap-[2rem] items-center justify-center h-full w-3/4"
            >
              <div id="loginTitle" className="flex items-center">
                {isDarkMode ? (
                  <img src={LogoDM} alt="" id="Logo" />
                ) : (
                  <img src={LogoLM} alt="" id="Logo" />
                )}
                <Link to="students/studentHome">
                  <h1
                    className={
                      isDarkMode
                        ? "font-title text-white font-black text-[55px] cursor-pointer"
                        : "font-title text-black font-black text-[55px] cursor-pointer"
                    }
                    onClick={switchScenes}
                  >
                    Insight
                  </h1>
                </Link>
              </div>
              <form
                className="flex flex-col gap-[1.5rem] w-full items-center pb-[2rem]"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                  value={formData.username}
                  name="username"
                  className={
                    isDarkMode
                      ? "bg-DGrayLogin opacity-[0.9] w-3/5 h-[3.25rem] font-Sig font-bold rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusDM-orange"
                      : "bg-LGrayLogin opacity-[0.9] w-3/5 h-[3.25rem] font-Sig font-bold rounded-[10px] text-black text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-black placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusLM-purple"
                  }
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  className={
                    isDarkMode
                      ? "bg-DGrayLogin opacity-[0.9] w-3/5 h-[3.25rem] font-Sig font-bold rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusDM-orange"
                      : "bg-LGrayLogin opacity-[0.9] w-3/5 h-[3.25rem] font-Sig font-bold rounded-[10px] text-black text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-black placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusLM-purple"
                  }
                />
                <button
                  type="submit"
                  value="Login"
                  className={
                    isDarkMode
                      ? "bg-DGrayLogin w-[30%] h-[2.25rem] rounded-[5rem] text-white text-[1.25rem] font-Sig hover:shadow-focusDM-orange cursor-pointer"
                      : "bg-LGrayLogin w-[30%] h-[2.25rem] rounded-[5rem] text-black text-[1.25rem] font-Sig hover:shadow-focusLM-purple cursor-pointer"
                  }
                >
                  Login
                </button>
              </form>
            </div>
            <div id="spacer" className="w-[30px]"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginLandingPage;
