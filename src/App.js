// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  
  const[cuenta, setCuenta] = useState(0);

  const sumarCantidades = () => {
    setCuenta (cuenta + 1);
  }
  return (
    <div className="App">
      <Cabecera cuenta ={cuenta}/>
      <Listado sumarCantidades = {sumarCantidades}/>
    </div>
  );
}

export default App;
