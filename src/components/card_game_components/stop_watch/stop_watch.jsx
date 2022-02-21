import React, { useEffect, useState } from "react";
import styles from "./stop_watch.module.css";
import cn from "classnames";

// 카드 게임 시간초
const StopWatch = ({ play, complete }) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState("00");
  let stopWatch = null;
  let delay = null;

  useEffect(() => {
    if (play) {
      let count = 0;
      setSecond("00");
      setMinute(0);
      delay = setTimeout(() => {
        stopWatch = setInterval(() => {
          setSecond((prev) => parseInt(prev) + 1);
          ++count;
          if (count == 60) {
            setSecond("00");
            count = 0;
            setMinute((prev) => prev + 1);
          }
        }, 1000);
      }, 2000);
    }
    return () => {
      clearInterval(stopWatch);
      clearTimeout(delay);
    };
  }, [play]);

  return (
    <>
      <span
        className={cn([styles.clear_title], {
          [styles.complete_title]: complete && !play,
        })}
      >
        Clear Time
      </span>
      <span
        className={cn([styles.stopWatch], {
          [styles.complete]: complete && !play,
        })}
      >{`${minute}:${second < 10 && second > 0 ? "0" + second : second}`}</span>
    </>
  );
};
export default StopWatch;
