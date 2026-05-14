import { ReactElement, useState } from "react";
import OrderDemo from "./OrderDemo";
import style from "./Condtion.module.scss";

export default function Condition(): ReactElement {
  const [enable, setEnable] = useState<boolean>(true);

  const handleClick = () => {
    setEnable(!enable);
  };

  return (
    <div className={style.container}>
      {enable && <OrderDemo />}
      <button onClick={handleClick} type="button">
        {enable ? "Убрать Demo" : "Показать Demo"}
      </button>
    </div>
  );
}
