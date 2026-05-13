import { ReactElement, useState, useEffect } from "react";
import style from "./Clock.module.scss";

export default function Clock(): ReactElement {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={style.container}>{time.toLocaleTimeString("ru-RU")}</div>
  );
}
