import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';

/* const elemento = React.createElement(componente,propiedades,hijos) */
//al parecer el hijo es lo q ira dentro de h1 en este caso
//Esto es lo q hariamos sin jsx

/* const elemento = React.createElement("h1",{className: "saludo"},"Hola mundo")

ReactDOM.render(
  elemento,
  document.getElementById('root')
); */

const root = document.getElementById("root")
/* ReactDOM.render(<h1 className="saludos">Hola mundo</h1>,root); */
/* ReactDOM.render(<App />,root); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);