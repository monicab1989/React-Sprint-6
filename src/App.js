import { useState } from "react";
import "./App.css";
import { Escena } from "./components/escena/Escena";
import { Btn, ContainerBtn, HeaderScreen, BtnScreen } from "./styles/styled";
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
    <div>
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
            <Escena
              title="Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial"
              isSelected={contador === 1}
            />
            <Escena
              title="Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas."
              isSelected={contador === 2}
            />
            <Escena
              title="El héroe decidió atravesar la puerta que le llevaba a casa"
              isSelected={contador === 3}
            />
            <Escena
              title="Mientras tanto, otras heroes no tuvieron tanta suerte en su elección..."
              isSelected={contador === 4}
            />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
