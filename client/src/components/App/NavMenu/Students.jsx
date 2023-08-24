import React, { useContext, useEffect, useState } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";

const Students = () => {
  const { isDarkMode } = useContext(LandingPageContext);
  const [students, setStudents] = useState([]);
  const [abscences, setAbscences] = useState([]);

  const getUserData = async () => {
    try {
      let response = await fetch("http://localhost:10000/users/student");
      let data = await response.json();
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const getAbscenceData = async () => {
    try {
      let response = await fetch("http://localhost:10000/students");
      let data = await response.json();
      console.log(data);
      setAbscences(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getAbscenceData();
  }, []);

  // Create a new array to store the combined data
  const combinedArray = [];

  // Iterate through the first array
  for (const item1 of abscences) {
    // Find the corresponding user data in the second array based on userid
    const userData = students.find((item2) => item2.userid === item1.userid);

    // If a matching user is found, merge the data and create a new object
    if (userData) {
      const combinedData = {
        ...item1, // Merge data from the first array
        firstname: userData.firstname,
        lastname: userData.lastname,
        daysabsent: userData.days_absent,
      };

      combinedArray.push(combinedData); // Add the merged object to the new array
    }
  }

  // Now combinedArray contains the merged data from both arrays
  console.log(combinedArray);

  return (
    <>
      <div
        id="studentsContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="studentsHeader"
          className={
            isDarkMode
              ? "font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
              : "font-Sig text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-DGrayLogin "
          }
        >
          <p
            className={
              isDarkMode
                ? "font-bold text-[3rem] pb-[1.5rem] border-b-2 w-[95%] flex justify-center font-robot"
                : "font-bold text-[3rem] pb-[1.5rem] border-b-2 border-DGrayLogin w-[95%] font-robot flex justify-center"
            }
          >
            Students
          </p>
        </div>
        <div
          className={
            isDarkMode
              ? "w-full mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-ContentBGDM scrollbar-thumb-DOLogin"
              : "w-full mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-BGboxLM scrollbar-thumb-LPLogin"
          }
        >
          <table className="w-[80%] overflow-y-scroll max-h-[80%] ml-[10rem] mr-[10rem] mt-[2rem]">
            <thead
              className={
                isDarkMode
                  ? "text-[#eae4f2] font-robot text-[30px]"
                  : "text-DGrayLogin font-robot text-[30px]"
              }
            >
              <tr>
                <th>Userid</th>
                <th>Name</th>
                <th>Days Absent</th>
              </tr>
            </thead>
            <tbody>
              {combinedArray
                .filter((item) => item.cohortid === 1) // Filter data for cohortid = 1
                .sort((a, b) => a.lastname.localeCompare(b.lastname))
                .map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className={
                        isDarkMode
                          ? index % 2 === 0
                            ? "bg-DGLogin mt-[2rem] border-b-[1px]"
                            : "mt-[2rem] border-b-[1px]"
                          : index % 2 === 0
                          ? "bg-LGLogin mt-[2rem] border-b-[1px] border-DGrayLogin"
                          : "mt-[2rem] border-b-[1px] border-DGrayLogin"
                      }
                    >
                      <td className="text-[24px] font-robot text-center">
                        {item.userid}
                      </td>
                      <td className="text-[24px] font-robot text-center">
                        {item.lastname}, {item.firstname}
                      </td>
                      <td className="text-[24px] font-robot text-center">
                        {item.days_absent}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
