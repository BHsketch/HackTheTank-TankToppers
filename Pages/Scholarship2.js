import React, { useEffect } from "react";
import axios from "axios";

function Scholarship1() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Retrieve the userId from local storage
        const scholarshipId = "s2"; // Set scholarship ID to "s1" for Scholarship1
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

    localStorage.setItem("scholarship_id", "s2"); // Set scholarship_id in local storage
    insertUserScholarshipPage();
  }, []);

  return <div>Scholarship2</div>;
}

export default Scholarship1;
