import React, { useEffect } from "react";
import axios from "axios";

function Contact() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (userId) {
          const scholarshipId = null;
          const pageId = "p3";
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

  return <div>Contact</div>;
}

export default Contact;
