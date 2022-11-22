import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Page4.module.css";

const projects = [
  "/images/project3.png",
  "/images/project4.png",
  "/images/project1.png",
  "/images/project2.png",
  "/images/project3.png",
  "/images/project4.png",
  "/images/project1.png",
  "/images/project2.png",
];

export default function Page4({}) {
  const [slidePx, setSlidePx] = useState(1350);

  const toPrev = () => {
    slidePx < 1350 && setSlidePx(slidePx + 900);
    slidePx === 1350 && setSlidePx(-2250);
  };

  const toNext = () => {
    slidePx > -2250 && setSlidePx(slidePx - 900);
    slidePx === -2250 && setSlidePx(1350);
  };

  return (
    <div className={styles.mainBox}>
      <h1 className={styles.page4_title}>Portfolio</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={{
              transform: `translateX(${slidePx}px)`,
              transition: "0.5s ease",
            }}
          >
            <img src={project} alt={index} />
          </li>
        ))}
      </ul>

      <IoIosArrowBack
        className={styles.prevBtn}
        onClick={toPrev}
        // style={{ display: slidePx === 0 ? "none" : "" }}
      />

      <IoIosArrowForward
        className={styles.nextBtn}
        onClick={toNext}
        // style={{ display: slidePx === -4125 ? "none" : "" }}
      />
    </div>
  );
}
