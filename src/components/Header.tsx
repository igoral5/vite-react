import { ReactElement, useRef } from "react";
import style from "./Header.module.scss";

export default function Header(): ReactElement {
  const header = useRef<HTMLHeadingElement | null>(null);

  const handleChangeColor = () => {
    if (header.current) header.current.style.backgroundColor = "gold";
  };

  return (
    <div className={style.page}>
      <h1 className={style.header} ref={header}>
        Я меняю свой цвет
      </h1>
      <div className={style.card}>
        <button onClick={handleChangeColor}>Изменить цвет</button>
      </div>
    </div>
  );
}
