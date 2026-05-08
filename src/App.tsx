import Image from "./components/Image";
import Recipe from "./components/Recipe";
import dog from "./assets/images/dog.jpg";
import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <>
      <Recipe name="Сырные палочки" />
      <Image src={dog} alt="Собака в шарфике" />
    </>
  );
}

export default App;
