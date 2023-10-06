import React from "react";
import styles from "./About.module.css";

const aboutMe = [
  "Welcome to my portfolio!",
  "I'm Shivam Srivastava, a passionate web developer with a love for creating interactive and innovative web applications.",
  "With strong inclination towards Problem Solving & Web Developement, I always strive to enhance my skills & expand my knowledge.",
  "Let's connect and build something amazing together!",
];

const About = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.tag}>{"<p>"}</span>
      </p>
      {aboutMe.map((line, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.tag}>{"   <span> "}</span>
          <span>{line}</span>
          <span className={styles.tag}>{" </span>"}</span>
        </p>
      ))}
      <p className={styles.line}>
        <span className={styles.tag}>{"</p>"}</span>
      </p>
    </div>
  );
};

export default About;
