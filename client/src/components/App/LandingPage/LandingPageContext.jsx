import React, { createContext, useState } from "react";
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
  return (
    <LandingPageContext.Provider value={{}}>
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
