// import React from "react";
import React, { useEffect } from "react";
import axios from "axios";
import "./Styling.css";

function Bookmark() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Retrieve the userId from local storage
        const scholarshipId = localStorage.getItem("scholarship_id"); // Set scholarship ID to "s1" for Scholarship1
        const pageId = "p7"; // Set page ID to "p6" for Scholarship1
        const step = 4; // Set step number to 3 for Scholarship1

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

    insertUserScholarshipPage();
  }, []);

  return (
    <div className="parent">
      <h2>You have successfully bookmarked this scholarship!🔖</h2>
    </div>
  );
}

export default Bookmark;
