import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Scholarships() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (userId) {
          const scholarshipId = null;
          const pageId = "p4";
          const step = 2;

          const response = await axios.post("http://localhost:8800/home", {
            userId,
            scholarshipId,
            pageId,
            step,
          });

          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    insertUserScholarshipPage();
  }, []);

  return (
    <div>
      <Link to="/scholarship1">Scholarship1</Link>
      <br></br>
      <Link to="/scholarship2">Scholarship2</Link>
    </div>
  );
}

export default Scholarships;
