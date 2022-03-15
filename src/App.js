import { useState } from "react";
import "./App.css";
import { Escena } from "./components/escena/Escena";
import {
  Btn,
  ContainerBtn,
  HeaderScreen,
  BtnScreen,
  Container,
} from "./styles/styled";
import Images from "./assests/img/Images";

function App() {
  const [contador, setContador] = useState(-1);
  const [screen, setScreen] = useState(false);
  //Funcion botón siguiente
  const nextSentence = () => {
    setContador(contador + 1);
    if (contador === 3) {
      setContador(contador);
    }
  };
  //Función botón anterior
  const beforeSentence = () => {
    setContador(contador - 1);
    if (contador === 0) {
      setContador(contador);
    }
  };
  //Función pantalla principal
  const firstScreen = () => {
    setScreen(true);
    setContador(0);
  };

  return (
    <Container img={contador === -1 ? "" : Images[contador].img}>
      {screen === false && (
        <HeaderScreen>
          <p>
            Va a comenzar un tutorial, en el que a través de los botones va a
            poder ir avanzando y sumergirse en una historia, la cuál no querrá
            que acabe nunca...
          </p>
          <BtnScreen onClick={firstScreen}>Comenzar el tutorial</BtnScreen>
        </HeaderScreen>
      )}
      {screen === true && (
        <div>
          <ContainerBtn>
            <Btn onClick={beforeSentence}>Anterior</Btn>
            <Btn onClick={nextSentence}>Siguiente</Btn>
          </ContainerBtn>
          <main>
            <Escena title={Images[0].title} isSelected={contador === 0} />
            <Escena title={Images[1].title} isSelected={contador === 1} />
            <Escena title={Images[2].title} isSelected={contador === 2} />
            <Escena title={Images[3].title} isSelected={contador === 3} />
          </main>
        </div>
      )}
    </Container>
  );
}

export default App;
