import { useState, useEffect, useRef } from "react";

import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import ReactPlayer from "react-player";
import Page4 from "./pages/Page4.jsx";

const filters = ["INTRO", "ABOUT", "STACKS", "PORTFOLIO", "CONTACT"];
const DIVIDER_HEIGHT = 0;

function App() {
  const [filter, setFilter] = useState(filters[0]);

  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          // console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          // console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          // console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          // console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          // 현재 5페이지
          // console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= -1 && scrollTop < pageHeight) {
          //현재 1페이지
          // console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          // console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          // console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          // console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 5페이지
          // console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  useEffect(() => {
    setFilter(filters[scrollIndex - 1]);
    console.log(scrollIndex);
  }, [scrollIndex]);

  // filters.value 클릭시 해당 div로 이동하는 기능
  const handleClick = (e) => {
    console.log(e);
    let text = e.target.firstChild.data;
    let index = filters.indexOf(text);

    const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

    outerDivRef.current.scrollTo({
      top: pageHeight * index + DIVIDER_HEIGHT * 2,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(index);
  };

  return (
    <>
      <div ref={outerDivRef} className={styles.outer}>
        <Navbar filters={filters} filter={filter} onClick={handleClick} />
        {/* <Dots /> */}
        <section className={`${styles.inner} ${styles.page1}`}>
          <ReactPlayer
            className={`${styles.react_player} ${
              filter === "ABOUT" && styles.blur
            }`}
            url={process.env.PUBLIC_URL + "/videos/beehouse.mp4"}
            height='150vh'
            width='auto'
            playing={true}
            controls={false}
            // loop={true}
            muted={true}
            style={{ filter: scrollIndex === 1 ? "none" : "blur(5px)" }}
          />
          <div className={`${styles.inner} ${styles.page1_text}`}>
            <h2>
              혁신적인 아이디어 창출과
              <br />
              지속가능한 성장을 하는 개발자
            </h2>
          </div>
        </section>
        <section className={`${styles.inner} ${styles.page2}`}>
          <div className={styles.profile_container}>
            <h1 className={styles.page2_title}>About me</h1>
            <img className={styles.profile} src='/images/HHB.jpg' alt='HHB' />
            <p className={styles.introduce1}>
              저는<span>긍정적인</span>프론트엔드 개발자
              <br />
              <span>방충림</span>입니다.
            </p>
            <p className={styles.introduce2}>
              내 앞에 어려움이 닥쳐와도 긍정적인 마인드와 문제를 해결하고자 하는
              마인드만 있다면 무슨일이든 해결할 수 있다고 생각합니다.
              <br />
              그 마인드를 가지고 제가 맡은바 역할을 완성해나가겠습니다.
              <br />
              어려운 것, 잘 모르는 것, 시도해보지 않았던 것을 겁먹지 않고
              차근차근 해결해나가며 내 것으로 만들어 나가겠습니다.
              <br />
              <span className={styles.introduce3}>
                배움은 끝이 없다는 말처럼 당장 내 앞에 있는 것만 보지 않고
                앞으로 나아가기 위해 끊임없이 연구, 노력하겠습니다.
              </span>
            </p>
          </div>
        </section>
        <section className={`${styles.inner} ${styles.page3}`}>
          <h1 className={styles.page3_title}>Stacks</h1>
          <div className={styles.stackcontainer}>
            <div>
              <div>
                <h3>Frontend</h3>
                <img src='/images/front.png' alt='front' />
              </div>
              <div>
                <h3>Mobile App</h3>
                <img src='/images/app.png' alt='app' />
              </div>
            </div>
            <div>
              <div>
                <h3>Backend</h3>
                <img src='/images/back.png' alt='back' />
              </div>
              <div>
                <h3>Deployment</h3>
                <img src='/images/deployment.png' alt='deployment' />
              </div>
            </div>
            <div>
              <div>
                <h3>Version Control</h3>
                <img src='/images/version.png' alt='version' />
              </div>
              <div>
                <h3>Communication</h3>
                <img src='/images/communication.png' alt='communication' />
              </div>
              <div>
                <h3>Certificate</h3>
                <img src='/images/certificate.png' alt='certificate' />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.inner} ${styles.page4}`}>
          {/* text */}
          <Page4 />
          {/* text */}
        </section>
        <section className={`${styles.inner} ${styles.page5}`}>
          <div className={styles.contact}>
            <h1 className={styles.page5_title}>Contact</h1>
            <p>
              아직 많이 부족한 저의 포트폴리오를 봐주셔서 감사합니다.
              <br />
              저에게 궁금한 점이 있으시면 연락 주시기 바랍니다.
              <br />
              연락주시면 3일 이내 회신드리겠습니다. 감사합니다.
            </p>
            <p>
              E-mail : bcl0206@gmail.com
              <br />
              phone : 010 4950 1181
              <br />
              SNS : ch__ng3 (instagram)
              <br />
              Portfolio : HHB.com
            </p>
            <div className={styles.qrcontainer}>
              <p>KakaoTalk</p>
              <img
                className={styles.qrcode}
                src='/images/kakaoqr.png'
                alt='QRcode'
              />
            </div>
            <button>RESUME DOWNLOAD</button>
          </div>
          <div className={styles.sendemail}></div>
          <footer className={styles.footer}>
            <p>
              본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로
              제작되었습니다.
            </p>
            <p>© Copyright 2023 HBB All Rights Reserved.</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
