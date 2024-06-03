import React from "react";
import image from "../images/bg-img-skills-2.jpg";

const imageAltText = "A simple background image";

const description =
  "I'm a Web Developer and I have recently completed my BCA from Srinivas University, Mangalore. I enjoy creating unique and simplistic web pages in creative ways.";

const skillsList = [
  "Web design",
  "User experience",
  "Responsive design",
  "Mobile user interfaces",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web Development experience I continually look for new and better ways to make tech and information accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
