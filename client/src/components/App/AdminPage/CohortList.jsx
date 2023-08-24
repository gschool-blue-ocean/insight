import React, { useState, useContext, useEffect } from "react"
import SuperUsersContext from "../AdminAndInstructorContext/SuperUsersContext";

const CohortName = () => {
  const { isCohorts, setSelectedCohort, selectedCohort } =
    useContext(SuperUsersContext);
  console.log(isCohorts);

  const handleCohortChange = (event) => {
    setSelectedCohort(event.target.value);
    console.log(event.target.value);
    // Update the selected cohort when the dropdown value changes
  };

   return (
     <select
       className="text-gray-900 p-[.5rem] w-[240px]"
       id="cohortSelect"
       value={selectedCohort}
       onChange={handleCohortChange}
     >
       {isCohorts.map((item, index) => (
         <option className="text-[.5rem]" key={index} value={item.cohortid}>
           {`Cohort ${item.cohortid}`}
         </option>
       ))}
     </select>
   );
};

export default CohortName