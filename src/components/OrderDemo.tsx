import { ReactElement, useEffect, useLayoutEffect } from "react";

export default function OrderDemo(): ReactElement {
  console.log("1. Рендер");

  useLayoutEffect(() => {
    console.log("2. useLayoutEffect вход");

    return () => {
      console.log("4. useLayoutEffect очистка");
    };
  }, []);

  useEffect(() => {
    console.log("3. useEffect вход");

    return () => {
      console.log("5. useEffect очистка");
    };
  }, []);

  return <div>Demo</div>;
}
