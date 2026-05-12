import { ReactElement, useState } from "react";
import style from "./Counter.module.scss";

export default function Counter(): ReactElement {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span className={style.value}>{counter}</span>
      <button className={style.button} onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
}
