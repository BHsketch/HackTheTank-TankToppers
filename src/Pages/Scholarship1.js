import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Scholarship1() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Retrieve the userId from local storage
        const scholarshipId = "s1"; // Set scholarship ID to "s1" for Scholarship1
        const pageId = "p6"; // Set page ID to "p6" for Scholarship1
        const step = 3; // Set step number to 3 for Scholarship1

        const response = await axios.post("http://localhost:8800/home", {
          userId,
          scholarshipId,
          pageId,
          step,
        });
        console.log(response.data); // Logging the API response
      } catch (error) {
        console.error(error);
      }
    };

    localStorage.setItem("scholarship_id", "s1"); // Set scholarship_id in local storage
    insertUserScholarshipPage();
  }, []);

  return (
    <div>
      <Link to="/bookmark">Bookmark</Link>
      <br></br>
      <Link to="/apply">apply</Link>
      <br></br>
      <Link to="/ineligible">ineligible</Link>
      <br></br>
      <Link to="/terms">terms</Link>
    </div>
  );
}

export default Scholarship1;
