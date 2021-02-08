/* import logo from './logo.svg'; */
import "./styles/styles.scss"
/* import './App.css'; */
//aca el profe tiene este import
import React,{Fragment} from 'react'
import Curso from './Curso'

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

//Esto q escribimos es jsx
//Funcion App q retorna un h1
/* const App = () => <h1>Hola mundo desde mi archivo App</h1> */

//Los elementos siempre deben devolver un elemento tipo vue
//OSea hijo directo de app solo puede ser 1 en este caso Div y alwasys Div xD
//Con fragment pa no usar div como en vue
//Fragmen iria en lugar d esos vacios
//Fragment => <> hijos</>
//En jsx obligatorio cerrar la etiqueta
//aca en lugar de class se usa className recuerda q es jsx y no html
// for => htmlfor
//No if,else,while ... otra forma pa hacerlo

/* const App = () => (
  <>    
    <div className="saludo">
      <h1>Hola mundo</h1>
      <p>Saludando desde fragment</p>   
      <img src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
    </div>
  </>
) */

const App = () => (
  <Fragment>   
      <section className="main-banner img-container l-section s-py-4">  
        <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
          
          <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
            <h1>Cursos Online</h1>
            <p>Empieza a estudiar ya mismo!</p>
            
            <div className="s-main-center">
              <a className="button s-mr-2 s-mb-2 m-mb-0" href="https://www.facebook.com/ztknatsu/" target="_blank">Facebook</a>
              <a className="button s-mb-2 m-mb-0" href="https://www.instagram.com/prieto_marco/" target="_blank">Instagram</a>
            </div>
          </div>
          
          <div>
            <div className="img-container s-ratio-16-9">
              <img className="s-radius-1" src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
            </div>
          </div>
        </div>
      </section>    
    <div className="ed-grid m-grid-3">
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>      
    </div>
  </Fragment>
)


export default App;
