import React,{Fragment} from 'react'
import Home from './Pages/Home'
import Form from './Pages/Form'
import Courses from "./Pages/Courses"
import MainMenu from "./Organisms/MainMenu"
import History from "./Pages/History"
import CourseDetail from './Pages/CourseDetail'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Users from '../components/Pages/Users'

const AppRoutes = () => (
    <Router>   
  {/* <Fragment> */}   
      <MainMenu/>
      <Switch>
          <Route path="/" exact component={Home}/>
          {/* cursos id va primero xq como es un switch agarraria primero el sin id si estuviera adelante un numerito ... tu te entiendes con fe */}
          {/* luego de cursos/:id puede ser cualquier cosa y el match del componente ya lo captura */}
          <Route path="/cursos/:id" component={CourseDetail}/>
          <Route path="/cursos"  component={Courses}/>
          <Route path="/usuarios"  component={Users}/>
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

export default AppRoutes