//peqeña funcionas q retornan/crean acciones

//funciones q retornan objetos actions o las crean
import axios from "axios"
import { ADD_TO_CART,DELETE_FROM_CART, GET_COURSE_LIST } from "./actions"

//vamos a recibir el id del curso
//pasamos como constante ya q hara mas practico cuando tengamos mas acciones
const addToCart = id => (    
    {
        type: ADD_TO_CART,
        id
    }
)

const deleteFromCart = id => ({
    type: DELETE_FROM_CART,
    id
})

const getCourseList = () => dispatch => {
    axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/cursos').then(response => {
        return dispatch(
            {
                type: GET_COURSE_LIST,
                courses: response.data
            }
        )
    })
}
//no export default xq c tendra varias objetos
export {addToCart,deleteFromCart,getCourseList}