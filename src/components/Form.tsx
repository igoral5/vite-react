import { ChangeEvent, ReactElement, SyntheticEvent, useState } from "react";
import style from "./Form.module.scss";

export default function Form(): ReactElement {
  const [name, setName] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <h1>Заполните форму:</h1>
      <form className={style.card} onSubmit={handleSubmit}>
        <label className={style.label}>
          Ваше имя:
          <input
            className={style.input}
            name="name"
            type="text"
            onChange={handleInputChange}
            value={name}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
