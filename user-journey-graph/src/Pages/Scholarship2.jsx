import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardCustom from "./CardCustom";
import "./Scholar.css";

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
        const response1 = await axios.post(
          "http://localhost:8800/applyScholarship",
          {
            user_id: userId, // Use "user_id" instead of "userId"
            scholarship_id: scholarshipId, // Use "scholarship_id" instead of "scholarshipId"
          }
        );
        console.log(response.data); // Logging the API response
      } catch (error) {
        console.error(error);
      }
    };

    localStorage.setItem("scholarship_id", "s2"); // Set scholarship_id in local storage
    insertUserScholarshipPage();
  }, []);

  return (
    <div className="black">
      <div className="gridLayout">
        <Link to="/bookmark" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="Bookmark this Scholarship"
            content="By bookmarking scholarships, you can curate a personalized list of opportunities tailored to your aspirations. Whether you need more time to research or are waiting for the perfect moment to apply, the bookmarked scholarships will be readily available whenever you need them."
          />
        </Link>

        <Link to="/apply" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="Apply for this scholarship"
            // content="By bookmarking scholarships, you can curate a personalized list of opportunities tailored to your aspirations. Whether you need more time to research or are waiting for the perfect moment to apply, the bookmarked scholarships will be readily available whenever you need them."
            content=" 
            Once you find a scholarship that aligns with your aspirations, click on the Apply button located below the scholarship details.

You will be directed to the application page, where you can review the scholarship requirements and access the application 
            
            "
          />
        </Link>

        <Link to="/ineligible" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="Ineligible for this Scholarship"
            // content="By bookmarking scholarships, you can curate a personalized list of opportunities tailored to your aspirations. Whether you need more time to research or are waiting for the perfect moment to apply, the bookmarked scholarships will be readily available whenever you need them."
            content="Sorry to Inform you but you dont meet the criteria for this scholarship!"
          />
        </Link>
        <Link to="/terms" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="View Terms and Conditions"
            // content="By bookmarking scholarships, you can curate a personalized list of opportunities tailored to your aspirations. Whether you need more time to research or are waiting for the perfect moment to apply, the bookmarked scholarships will be readily available whenever you need them."
            content="View the terms and conditions of this scholarship to check whether you are eligible or not"
          />
        </Link>
      </div>
    </div>
  );
}

export default Scholarship1;
