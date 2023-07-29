import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styling.css";

function Success() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Retrieve the userId from local storage
        const scholarshipId = localStorage.getItem("scholarship_id"); // Set scholarship ID to "s1" for Scholarship1
        const pageId = "p14"; // Set page ID to "p6" for Scholarship1
        const step = 6; // Set step number to 3 for Scholarship1

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

  return <h1 style={{ color: "white" }}>Success✅😊</h1>;
}

export default Success;
