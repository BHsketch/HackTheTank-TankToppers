import React, { useEffect } from "react";
import axios from "axios";
import "./Contact.css";
import CardCustom from "./CardCustom";

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

  return (
    <>
      <div className="contact">
        <div className="parent123">
          <CardCustom
            heading="Welcome to the Contact Us page of Scholify!"
            content="We are thrilled to hear from you and provide any assistance you may need regarding our exceptional scholarship-providing service. At Scholify, we are passionate about making a positive impact on the lives of aspiring students like you, and we are here to support you every step of the way in your educational journey.

If you have any questions about our platform, scholarship opportunities, or need guidance on how to apply for scholarships, don't hesitate to reach out to our dedicated team. We are committed to helping you find the perfect scholarship opportunities tailored to your unique academic aspirations.

Whether you are a student seeking scholarships or an organization interested in partnering with Scholify, we welcome your inquiries and feedback. Your valuable input will enable us to continuously improve our services and provide the best possible support to students worldwide.

Thank you for choosing Scholify – where education knows no boundaries, and together, we #keepMovingForward. We look forward to connecting with you soon!"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
