import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  // {
  //   social: "website",
  //   link: "anshphirani.me",
  //   href: "https://anshphirani.me",
  // },
  {
    social: "email",
    link: "shivamsrivastava2811@gmail.com;",
    href: "mailto:shivamsrivastava2811@gmail.com",
  },
  {
    social: "github",
    link: "Srivastava28;",
    href: "https://github.com/Srivastava28",
  },
  {
    social: "linkedin",
    link: "srivastava28;",
    href: "https://www.linkedin.com/in/srivastava28/",
  },
  {
    social: "Leetcode",
    link: "Srivastava_28;",
    href: "https://leetcode.com/Srivastava_28/",
  },
  {
    social: "telegram",
    link: "Srivastava_28;",
    href: "https://t.me/Srivastava_28",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.Lets Connect</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
