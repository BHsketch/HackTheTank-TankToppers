import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Retrieve the userId from local storage

        if (userId) {
          const requests = [
            { pageId: "p1", step: 0 },
            { pageId: "p2", step: 1 },
          ];

          const promises = requests.map(async (request) => {
            const { pageId, step } = request;
            const scholarshipId = null; // Set scholarship ID to null

            const response = await axios.post("http://localhost:8800/home", {
              userId,
              scholarshipId,
              pageId,
              step,
            });

            console.log(response.data); // Logging the API response
          });

          await Promise.all(promises);
        }
      } catch (error) {
        console.error(error);
      }
    };

    insertUserScholarshipPage();
  }, []);

  return (
    <div>
      <Link to="/contact">Contact</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/scholarships">Scholarships</Link>
    </div>
  );
}

export default Home;
