import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  University : "Madan Mohan Malaviya University of Technology, Gorakhpur",
  Degree : "Bachelor of Technology",
  Stream: "Information Technology",
  CGPA: "8.32/10",
  Start: "Dec 2020",
  End: "May 2024",
};

const intermediateData = {
  school: "D.B.S. Inter College, Jaunpur",
  degree: "XII",
  major: "Science",
  percentage: "90.2",
  start: "Apr 2018",
  end: "Mar 2019",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>Intermediate</h3>
        <EducationCode jsonData={intermediateData} />
      </div>
    </div>
  );
};

export default Education;
