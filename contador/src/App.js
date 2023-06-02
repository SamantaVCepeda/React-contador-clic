import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';


function App() {

  const manejarClic = () =>{
    console.log('clic')
  }

  const reiniciarContador = () =>{
    console.log('reiniciar')
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
          src={ freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics='5'/>
        <Boton 
          texto='clic'
          esBotonDeClic={ true }
          manejarClic={ manejarClic }/>
        <Boton 
          texto='reiniciar' 
          esBotonDeClic={ false } 
          manejarClic={ reiniciarContador }/>
      </div>
    </div>
  );
}

export default App;
