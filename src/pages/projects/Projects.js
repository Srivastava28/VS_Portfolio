import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import video from "../../assets/project-images/videochat.png"
import reddrop from "../../assets/project-images/reddrop.png"

const projectsData = [
  {
    id: 1,
    name: "RedDrop",
    image: reddrop,
    description:
      "A Blood Bank App",
    tags:["javascript", "react.js", "react-redux", "express.js", "node.js", "MongoDB"],
    source_code: "https://github.com/anshphirani/encode",
    demo: "https://reddrop.vercel.app/login",
  },
  {
    id: 2,
    name: "VSCode Portfolio",
    image: vsCodePortfolioImage,
    description:
      "A themeable and developer-centric portfolio with a sleek VS Code theme to showcase my work and skills.",
    tags: ["javascript", "react", "css-modules"],
    source_code: "https://github.com/Srivastava28/VS_Portfolio",
    demo: "https://github.com/Srivastava28/VS_Portfolio",
  },
  {
    id: 3,
    name: "Video Chat App",
    image: video,
    description:
      "A user-friendly web application that fetches real-time country-wise COVID data from API",
    tags: ["javascript", "react", "chart.js", "axios"],
    source_code: "https://github.com/Srivastava28/VideoChatApp",
    demo: "https://github.com/Srivastava28/VideoChatApp",
  },

];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
