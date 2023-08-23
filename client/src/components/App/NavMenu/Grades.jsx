import React, { useContext, useEffect, useState } from "react";
import LandingPageContext from "../LandingPage/LandingPageContext";
const Grades = () => {
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
        id="GradesContainer"
        className="flex flex-col items-center h-full font-robot pb-[4rem]"
      >
        <div
          id="gradesHeader"
          className={
            isDarkMode
              ? "font-robot text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-white"
              : "font-robot text-[1.5rem] w-[95%] pt-[1.5rem] flex justify-center text-black"
          }
        >
          <p
            className={
              isDarkMode
                ? "font-bold text-[3rem] pb-[1.5rem] border-b-2 w-[95%] flex justify-center"
                : "font-bold text-[3rem] pb-[1.5rem] border-b-2 border-black w-[95%] flex justify-center"
            }
          >
            Grades
          </p>
        </div>
        <div
          className={
            isDarkMode
              ? "w-[95%] mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-ContentBGDM scrollbar-thumb-DOLogin"
              : "w-[95%] mt-[.5rem] overflow-y-scroll max-h-[90%] min-h-[85%] scrollbar-thin scrollbar-track-BGboxLM scrollbar-thumb-LPLogin"
          }
        >
          <table className="font-robot w-full overflow-y-scroll max-h-[80%]">
            <thead
              className={
                isDarkMode
                  ? "text-[#DCD3EB] text-[2rem]"
                  : "text-DGrayLogin text-[2rem]"
              }
            >
              <tr>
                <th>Student Name</th>
                <th>Student Grade Average</th>
              </tr>
            </thead>
            <tbody>
              {combinedArray.map((item, index) => (
                <tr
                  key={index}
                  className={
                    isDarkMode
                      ? index % 2 === 0
                        ? "bg-DGLogin mt-[2rem] border-b-[1px]"
                        : "mt-[2rem] border-b-[1px]"
                      : index % 2 === 0
                      ? "bg-LGLogin mt-[2rem] border-b-[1px]"
                      : "mt-[2rem] border-b-[1px]"
                  }
                >
                  <td className="text-[24px] font-robot text-center">
                    {item.lastname}, {item.firstname}
                  </td>
                  <td className="text-center">{item.avg_grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Grades;
