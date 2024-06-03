import React from "react";
import image from "../images/portfolio-section-img.jpg";

const imageAltText = "A table with laptops and other things";

const projectList = [
  {
    title: "AcadeMate",
    description:
      "Website to help my peers with their college-related tasks and some extra study materials. Made with React and Tailwind CSS.",
    url: "https://academatebyvrs.netlify.app",
  },
  {
    title: "ProDo - A Personal Productivity System",
    description:
      "An all-in-one application for managing finances, bookshelves, and blogs. Made with PHP, CSS, JavaScript & PhpMyAdmin.",
    url: "",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/vigneshmrx/resume",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
