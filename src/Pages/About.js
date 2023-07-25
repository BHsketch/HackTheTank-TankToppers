import React, { useEffect } from "react";
import axios from "axios";
import "./About.css";
import CardCustom from "./CardCustom";

function About() {
  useEffect(() => {
    const insertUserScholarshipPage = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (userId) {
          const scholarshipId = null;
          const pageId = "p5";
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
      <div className="about">
        <div className="custom__card">
          <CardCustom
            // className="card__custom"
            heading="About Us-Scholify"
            content="
        Welcome to Scholify, your gateway to boundless educational opportunities! We are a pioneering scholarship-providing service committed to empowering talented and deserving students worldwide. At Scholify, we firmly believe that access to quality education should not be limited by financial constraints.

Our journey began with the vision of our founder, Mayank Pareek, who recognized the need to bridge the gap between aspiring scholars and life-changing scholarships. With a passion for making a positive impact on students' lives, Mayank laid the foundation of Scholify, driven by the motto #keepMovingForward.

At Scholify, we strive to redefine the scholarship landscape by leveraging cutting-edge technology and innovation. Our platform simplifies the scholarship search and application process, ensuring that students can focus on what truly matters - their academic pursuits.


We are not just a service; we are a community that fosters growth, ambition, and perseverance. Together, we create a space where education knows no boundaries, and students are empowered to reach new heights.

At Scholify, dreams are within reach, and together, we are building a world where every aspiring mind can flourish.

Join Scholify and embark on a journey of endless possibilities!"
          />
        </div>
      </div>
    </>
  );
}

export default About;
