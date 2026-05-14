import { ChangeEvent, ReactElement } from "react";
import { TemperatureScale, TTemperature } from "../types";
import { toCelsius, toFahrenheit, tryConvert } from "../utils";
import style from "./TemperatureInput.module.scss";

type TemperatureInputProps = {
  scale: TemperatureScale;
  value: TTemperature;
  setValue(value: TTemperature): void;
};

export default function TemperatureInput({
  scale,
  value,
  setValue,
}: TemperatureInputProps): ReactElement {
  const valueConvert =
    value.scale === scale
      ? value.temperature
      : tryConvert(
          value.temperature,
          value.scale === TemperatureScale.CELCIUS ? toFahrenheit : toCelsius,
        );
  return (
    <fieldset className={style.card}>
      <label className={style.label}>
        Введите температуру в {scale}:
        <input
          className={style.input}
          name="name"
          type="text"
          inputMode="numeric"
          value={valueConvert}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValue({ scale, temperature: event.target.value })
          }
        />
      </label>
    </fieldset>
  );
}
