import { ReactElement, useState } from "react";
import { TemperatureScale, TTemperature } from "../types";
import TemperatureInput from "./TemperatureInput";
import style from "./Converter.module.scss";

export default function Converter(): ReactElement {
  const [value, setValue] = useState<TTemperature>({
    scale: TemperatureScale.CELCIUS,
    temperature: "",
  });
  return (
    <div>
      <h1>Конвертер температуры</h1>
      <div className={style.content}>
        <TemperatureInput
          scale={TemperatureScale.CELCIUS}
          value={value}
          setValue={setValue}
        />
        <TemperatureInput
          scale={TemperatureScale.FAHRENHEIT}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
