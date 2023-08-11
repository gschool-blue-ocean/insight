import React from 'react';
const LoginLandingPage = () => {
    return (
        <>
        <div id="pageContainer" className='bg-gradient-to-t'>
      <div id="loginContainer">
        <div id="loginInputBox">
          <div id="loginTitle">
              <img src="" alt="" id="Logo"/>
              <h1 className='text-[red]'>Insight</h1>
          </div>
          <form action="POST">
              <input type="text" />
              <input type="text" />
              <input type="submit" placeholder="Login" />
          </form>
        </div>
      </div>
    </div>
    </>
    )
}
export default LoginLandingPage;