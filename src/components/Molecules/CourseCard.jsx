import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import { addToCart } from '../../redux/actionCreators'
import {connect} from 'react-redux'
//{} para q imprima html
//src className son propiedades

const persona = {"nombre":"Alberto","apellido":"Textex","edad":24}
const mayorEdad = edad => edad >= 18

/* const curso = {
  "title":"React desde cero",
  "imagen": "https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "price" : "50 usd"
} */

/* const Curso = () => ( */
//aca en el sgt tendria q poner props.imagen , props.title  y asi ..
/* const Curso = props => ( */ 
//con este ultimo ya nos ahorramos la fatiga de escribir props
const CourseCard = ({id,title,imagen,price,profesor,addCourseToCart,cart}) => (
  <article className="s-shadow-bottom" id="title">    
    <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
    <Link to={`/Cursos/${id}`}>
      <img src={imagen} alt={title}/>
    </Link>
    {/* {
      imagen
      ? <img src={imagen} alt={title}/>
      : <img src="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    } */}
      {/* {  <img src={imagen ? imagen :"https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={title ? title : "No hay titulo"}/>
      } */}    

    </div>
    <div className="s-bg-white s-pxy-2">
    {/* <h3>{persona.nombre}</h3> */}
    {/* <h3 className="center">{`Hola me llamo ${persona.nombre}`}</h3>  */}       
    <h3 className="center">{title}</h3>        
    <br></br>
    {/* <p>{mayorEdad(persona.edad) ? "Soy mayor de edad" :"Soy menor de edad"}</p> */}
    {mayorEdad(persona.edad) 
    ? <div>
      <p>Soy mayor de edad</p>
      </div> 
    : <p>Soy menor de edad</p>}
    </div>     
    <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
    <h4>
      {`Profe: ${profesor}`}
    </h4>   
    <br/>     
    <div className="button s-to-right">
      <button 
        className="button button s-to-right"
        onClick={() => addCourseToCart(id)}
        >{ cart.find(a => a === id) 
         ? `Sacar del carrito`
         : `$${price} USD`}
        </button>
    </div>
    </footer> 
  </article>
)
//c puede esperar otros tipos no solo string
CourseCard.propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string,
}
CourseCard.defaultProps = {
    title: "Inserte Titulo",
    imagen: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 20,
    profesor: "Tu puedes ser tu profesor"
}

//este papi recibe el estado
const mapStateToProps = state => ({
  cart: state.cart
})

//mapeo al dispatch y lo convierte en propiedades
const mapDispatchToProps = dispatch => ({
  addCourseToCart (id){
    dispatch(addToCart(id))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CourseCard)