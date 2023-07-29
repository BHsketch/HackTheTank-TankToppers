import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardCustom from "./CardCustom";
import "./Scholarships.css";

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
    <div className="scholarships">
      <div className="parent111">
        <Link to="/scholarship1" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="Scholarship-1"
            content="Merit Scholarship: This scholarship is awarded to outstanding students based on their academic achievements."
          />
        </Link>
        <Link to="/scholarship2" style={{ textDecoration: "none" }}>
          <CardCustom
            heading="Scholarship-2"
            content="Financial Need Scholarship: This scholarship is designed to support students with financial difficulties who demonstrate a strong commitment to education."
          />
        </Link>
      </div>
    </div>
  );
}

export default Scholarships;
