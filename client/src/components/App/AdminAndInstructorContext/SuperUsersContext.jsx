import React, { createContext, useState, useEffect, useContext } from "react";
const SuperUsersContext = createContext();
import AuthContext from "../AuthFolder/authcontext";
import LandingPageContext from "../LandingPage/LandingPageContext";
import { Chart as ChartJS } from "chart.js";
import Chart from "chart.js/auto";


export const SuperUsersProvider = ({ children }) => {
    const {localURL} = useContext(LandingPageContext)
  //state for cohort drop down
  const [selectedCohort, setSelectedCohort] = useState("");
  const [isCohorts, setCurrentCohort] = useState([]);
  //grab all cohorts name for Admin and instructors drop down
  const getCohort = async () => {
    try {
      let res = await fetch(`${localURL}/cohorts/`);
      // console.log(cohortData);
      if (!res.ok) {
          throw new Error(`Cohort not found, status: ${res.status}`);
        }
        let cohortData =  await res.json();
        setCurrentCohort(cohortData);
    } catch (error) {
      console.error("There was a problem finding the Cohorts:", error.message);
    }
  };
  useEffect(() => {
      getCohort();
      console.log(getCohort());
  }, []);



  return (
    <SuperUsersContext.Provider
      value={{
        isCohorts,
        selectedCohort,
        setSelectedCohort
      }}
    >
      {children}
    </SuperUsersContext.Provider>
  );
};
export default SuperUsersContext;
