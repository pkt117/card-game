import React, { useEffect, useState } from "react";
import styles from "./stop_watch.module.css";

// 카드 게임 시간초
const StopWatch = ({ play }) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState("00");
  let stopWatch;

  useEffect(() => {
    if (play) {
      let count = 0;
      setSecond("00");
      setMinute(0);
      stopWatch = setInterval(() => {
        setSecond((prev) => parseInt(prev) + 1);
        ++count;
        if (count == 60) {
          setSecond("00");
          count = 0;
          setMinute((prev) => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(stopWatch);
  }, [play]);

  return (
    <>
      <span className={styles.stopWatch}>{`${minute}:${
        second < 10 && second > 0 ? "0" + second : second
      }`}</span>
    </>
  );
};
export default StopWatch;
