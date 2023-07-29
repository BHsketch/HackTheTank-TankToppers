import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { Card } from "@mui/material";
import CardCustom from "./CardCustom";

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
    <>
      <div className="home">
        <h1 className="heading">Welcome to Scholify</h1>
        <div className="container">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <CardCustom
              heading="Contact Us"
              content="Have questions about our exceptional scholarship-providing service, Scholify? We'd love to hear from you! Reach out to our dedicated team through this contact form, and we'll gladly assist you in finding the perfect scholarship opportunities tailored to your academic aspirations. Take a step towards your bright future with Scholify's unparalleled support in realizing your educational dreams. Get in touch today!"
            />
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <CardCustom
              heading="About Us"
              content="Welcome to Scholify, a visionary scholarship-providing service founded by Mayank Pareek. At Scholify, we believe that every talented and deserving student should have access to quality education, regardless of financial constraints. Our platform is driven by the passion to make a positive impact on the lives of aspiring scholars worldwide.
#KeepMovingForward is not just a tagline for us; it represents our core philosophy. We are committed to empowering students to keep pushing their boundaries, overcome obstacles, and strive for excellence in their educational journey."
            />
          </Link>
          <Link to="/scholarships" style={{ textDecoration: "none" }}>
            <CardCustom
              heading="Scholarships"
              content="Welcome to Scholify, a groundbreaking startup dedicated to
            revolutionizing the scholarship landscape. We connect aspiring
            students with numerous scholarship opportunities, empowering them to
            pursue their dreams without financial constraints. With Scholify,
            access to education is reimagined, creating a brighter future for
            talented minds worldwide."
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
