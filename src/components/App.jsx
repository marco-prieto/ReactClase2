/* import logo from './logo.svg'; */
import "../styles/styles.scss"
/* import './App.css'; */
//aca el profe tiene este import
import React,{Fragment} from 'react'
import Home from './Pages/Home'
import Form from './Pages/Form'
import CourseGrid from "./Organisms/CourseGrid"
import MainMenu from "./Organisms/MainMenu"
import History from "./Pages/History"
import CourseDetail from './Pages/CourseDetail'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

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

/* const cursos = [
  {
    "title": "React desde cero",
    "imagen": "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "price": 30,
    "profesor": "Beto el coqueto"
  },
  {
    "title": "Go desde cero",
    "imagen": "https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "price": 20,
    "profesor": "Richard Textex"
  },
  {
    "title": "Javascript desde cero",
    "imagen": "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "price": 40,
    "profesor": "Juanfra Bot"
  },
  {
    "title": "Python desde cero",
    "imagen": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "price": 44,
    "profesor": "Alfred Goy"
  }  
] */

//ya no sera fragment ahora sera router papu
//exact es booleano significa q la ruta es exacta y es pal home usualemnte
const App = () => (
  <Router>   
  {/* <Fragment> */}   
      <MainMenu/>
      <Switch>
          <Route path="/" exact component={Home}/>
          {/* cursos id va primero xq como es un switch agarraria primero el sin id si estuviera adelante un numerito ... tu te entiendes con fe */}
          {/* luego de cursos/:id puede ser cualquier cosa y el match del componente ya lo captura */}
          <Route path="/cursos/:id" component={CourseDetail}/>
          <Route path="/cursos"  component={CourseGrid}/>
          <Route path="/formulario"  component={()=> <Form name="Pagina de Contacto"/>}></Route>
          <Route path="/historial/:valor"  component={()=> <History name="Pagina de Contacto"/>}></Route>
          <Route path="/historial"  component={()=> <History name="Pagina de Contacto"/>}></Route>
          <Route component={() => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <span>Pagina no encontrada</span>
            </div>
          )}/>
      </Switch>
      {/* <Banner/>
      <Formulario name="aea"/> */}
    <div className="ed-grid m-grid-3">
      {/* <Curso 
        title="React desde cero" 
        imagen="https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" price={20} 
        profesor="Carlito"/>
      <Curso 
        title="Diseño"         
        profesor="Ramiro"/>
      <Curso 
        title="Creativity" 
        imagen="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" price={10}
        profesor="Albert" />
      <Curso/>         */}   

      {/* {
        cursos.map(
          cur => <Curso 
          title={cur.title}
          profesor={cur.profesor}
          imagen = {cur.imagen}
          price = {cur.price} />)
      } */}
      
    </div>
    {/* <CourseGrid/> */}
  {/* </Fragment> */}
  </Router>
)


export default App;
