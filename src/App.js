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
  const [contador, setContador] = useState(1);
  const [screen, setScreen] = useState(false);
  //Funcion botón siguiente
  const nextSentence = () => {
    setContador(contador + 1);
    if (contador === 4) {
      setContador(contador);
    }
  };
  //Función botón anterior
  const beforeSentence = () => {
    setContador(contador - 1);
    if (contador === 1) {
      setContador(contador);
    }
  };
  //Función pantalla principal
  const firtsScreen = () => {
    setScreen(true);
  };

  return (
    <Container>
      {screen === false && (
        <HeaderScreen>
          <p>
            Va a comenzar un tutorial, en el que a través de los botones va a
            poder ir avanzando y sumergirse en una historia, la cuál no querrá
            que acabe nunca...
          </p>
          <BtnScreen onClick={firtsScreen}>Comenzar el tutorial</BtnScreen>
        </HeaderScreen>
      )}
      {screen === true && (
        <div>
          <ContainerBtn>
            <Btn onClick={beforeSentence}>Anterior</Btn>
            <Btn onClick={nextSentence}>Siguiente</Btn>
          </ContainerBtn>
          <main isSelected={screen === false}>
            <Escena title={Images[0].title} isSelected={contador === 1} />
            <Escena title={Images[1].title} isSelected={contador === 2} />
            <Escena title={Images[2].title} isSelected={contador === 3} />
            <Escena title={Images[3].title} isSelected={contador === 4} />
          </main>
        </div>
      )}
    </Container>
  );
}

export default App;
