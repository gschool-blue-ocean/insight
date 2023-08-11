import React from "react";
const LoginLandingPage = () => {
  const handleSubmit = () => {
    //handle it
  };
  const handleToggle = () => {
    //handle it
  }
  return (
    <>
      <div
        id="pageContainer"
        className="bg-[url('/assets/cityBackground.jpg')] bg-cover bg-center h-screen"
      >
        <div className="bg-DGLogin bg-opacity-[0.8] w-full h-screen flex justify-center items-center">
          <div
            id="loginContainer"
            className="w-1/2 bg-BGboxDM bg-opacity-[0.6] h-1/3 rounded-[3rem] flex justify-evenly items-center"
          >
            <div id="toggleContainer" className="h-full flex flex-col justify-start pt-[2rem]">
              <img src="assets/toggleOn.svg" alt="das toggle" onClick={handleToggle}/>
            </div>
            <div
              id="loginBox"
              className="flex flex-col gap-[2rem] items-center justify-center h-full w-3/4"
            >
              <div id="loginTitle" className="flex items-center">
                <img src="/assets/Logo.svg" alt="" id="Logo" />
                <h1 className="font-title text-white font-[800] text-[65px]">
                  Insight
                </h1>
              </div>
              <form
                action="POST"
                className="flex flex-col gap-[1.5rem] w-full items-center"
              >
                <input
                  type="text"
                  placeholder="username"
                  className="bg-DGrayLogin opacity-[0.9] w-2/5 h-[3.25rem] font-Sig font-bold rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusDM-orange"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="bg-DGrayLogin opacity-[0.9] font- w-2/5 h-[3.25rem] font-Sig rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:text-[1.5rem] placeholder:font-thin focus:shadow-focusDM-orange"
                />
                <input
                  onSubmit={handleSubmit}
                  type="submit"
                  value="login"
                  className="bg-DGrayLogin w-[15%] h-[2.25rem] rounded-xl text-white text-[1.25rem] font-Sig hover:shadow-focusDM-orange"
                />
              </form>
            </div>
            <div id="spacer" className="w-[30px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginLandingPage;
