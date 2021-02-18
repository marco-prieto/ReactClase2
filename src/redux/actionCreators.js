//peqeña funcionas q retornan/crean acciones

//funciones q retornan objetos actions o las crean
import { ADD_TO_CART,DELETE_FROM_CART } from "./actions"

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
//no export default xq c tendra varias objetos
export {addToCart,deleteFromCart}