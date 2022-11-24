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
  /* test */
  const [check, setCheck] = useState(2);

  // console.log(projects[che]);
  /* test */

  const [slidePx, setSlidePx] = useState(1500);

  const toPrev = () => {
    setCheck((prev) => prev - 1);
    slidePx <= 2500 && setSlidePx(slidePx + 1000);
    setTimeout(() => {
      slidePx === 1500 && setSlidePx(-1500);
      slidePx === 1500 && setCheck(5);
    }, 300);
  };

  const toNext = () => {
    setCheck((prev) => prev + 1);
    slidePx >= -2500 && setSlidePx(slidePx - 1000);

    setTimeout(() => {
      slidePx === -1500 && setSlidePx(1500);
      slidePx === -1500 && setCheck(2);
    }, 300);
  };

  return (
    <div className={styles.mainBox}>
      <h1 className={styles.page4_title}>Portfolio</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={
              slidePx === 1500 || slidePx === -1500
                ? {
                    transform: `translateX(${slidePx}px)`,
                    // transition: "0s ease",
                  }
                : {
                    transform: `translateX(${slidePx}px)`,
                    transition: " all 0.5s ease",
                  }
            }
          >
            <img
              src={project}
              alt={index}
              style={
                index - 1 === check || index + 1 === check
                  ? { opacity: `0.4` }
                  : {}
              }
            />
          </li>
        ))}
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
      </ul>
    </div>
  );
}
