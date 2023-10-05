import './App.css'
import { Button } from './components/button';
import { useState } from 'react';

function App({ texto }) {

  const [estado, setEstado] = useState("Verdadero")
  return (
    <>
      <div>
        <h1>
          {estado}
        </h1>
        <button onClick={() => {
          if (estado == "Verdadero") {
            setEstado("Falso");

          } else {
            setEstado("Verdadero");
          }
        }
        }>
          Cambiar estado
        </button>

        <button  onClick={()=>{
          alert("Enhorabuena, por comprar");

        }}>alerta</button>
        
        <Button texto={"Carrito"}></Button>
        <Button texto={"Ayuda"}></Button>
      </div>
    </>
  );
}

export default App
