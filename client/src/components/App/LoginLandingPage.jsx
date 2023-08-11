import React from "react";
const LoginLandingPage = () => {
  const handleSubmit = () => {
    //handle it
  };
  return (
    <>
      <div
        id="pageContainer"
        className="bg-[url('/assets/cityBackground.jpg')] bg-cover bg-center  h-screen"
      >
        <div className="bg-[green] bg-opacity-[0.3] w-full h-screen flex justify-center items-center">
          <div
            id="loginContainer"
            className="w-1/2 bg-white bg-opacity-[0.2] h-1/3 rounded-[3rem] flex justify-center items-center"
          >
            <div
              id="loginBox"
              className="flex flex-col gap-[2rem] items-center justify-center h-full w-3/4"
            >
              <div id="loginTitle" className="flex items-center">
                <img
                  src="/assets/Logo.svg"
                  alt=""
                  id="Logo"
                  className="h-[65px] w-[65px]"
                />
                <h1 className="font-title text-white font-bold text-[65px]">
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
                  className="bg-[#b0afaf] w-2/5 h-[2.5rem] font-Sig font-bold rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:font-bold focus:shadow-focus-purple"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="bg-[#b0afaf] font- w-2/5 h-[2.5rem] font-Sig rounded-[10px] text-white text-center z-0 placeholder:z-10 placeholder:opacity-[1] placeholder:text-white placeholder:font-bold focus:shadow-focus-purple"
                />
                <input
                  onSubmit={handleSubmit}
                  type="submit"
                  value="Login"
                  className="bg-[#b0afaf] w-[15%] h-[2.25rem] rounded-xl text-white font-Sig hover:shadow-focus-purple"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginLandingPage;
