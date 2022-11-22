import React from "react";
import styles from "./Navbar.module.css";
import { SiNotion, SiGithub } from "react-icons/si";

export default function Navbar({ filters, filter, onClick }) {
  return (
    <nav className={`${styles.nav} ${filter !== "INTRO" && styles.bg}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img
            className={styles.icon}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e764cf6-d5a5-446f-8dc0-2c863d776465%2Fhhb.png?table=block&id=5f3fdec1-e37b-4879-8f47-12432456de0e&spaceId=b32eb4a8-c75f-494e-8df5-f778d7b1051e&width=250&userId=4dd8bab0-9aaf-42d0-b101-0e8e009c785c&cache=v2'
            alt=''
          />
          <span className={styles.name}>HHB</span>
        </div>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li
              onClick={onClick}
              key={index}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </li>
          ))}
        </ul>
        <div className={styles.link}>
          <SiNotion className={styles.notionBtn} />
          <SiGithub className={styles.githubBtn} />
        </div>
      </div>
    </nav>
  );
}
