import Image from "./components/Image";
import Recipe from "./components/Recipe";
import dog from "./assets/images/dog.jpg";
import { ReactElement } from "react";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Header from "./components/Header";
import Form from "./components/Form";
import Converter from "./components/Converter";
import Condition from "./components/Condition";

function App(): ReactElement {
  return (
    <>
      <Recipe name="Сырные палочки" />
      <Counter />
      <Clock />
      <Header />
      <Form />
      <Converter />
      <Condition />
      <Image src={dog} alt="Собака в шарфике" />
    </>
  );
}

export default App;
