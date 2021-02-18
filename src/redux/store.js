import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ADD_TO_CART,DELETE_FROM_CART } from './actions'


const initialStore = {
    cart: []    
}

const initialCourses = {
    courses: [{
        "id" : 1,
      "title": "React desde cero",
      "imagen": "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "price": 30,
      "profesor": "Beto el coqueto"
    },
    {
        "id": 2,
      "title": "Go desde cero",
      "imagen": "https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "price": 20,
      "profesor": "Richard Textex"
    },
    { 
        "id" : 3,
      "title": "Javascript desde cero",
      "imagen": "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "price": 40,
      "profesor": "Juanfra Bot"
    },
    {
        "id":4,
      "title": "Python desde cero",
      "imagen": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 44,
      "profesor": "Alfred Goy"
    }]
}
//sea cual sea el dispatch q suceda el reducer lo recibe
const rootReducer = (state = initialStore,{id,type}) => {
    

    if(type === ADD_TO_CART){
        if(state.cart.find(a => a === id)) return state
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if(type === DELETE_FROM_CART){
        return {
            ...state,
            cart: state.cart.filter(c => c !== id)
        }
    }
    //este return state final no c puede eliminar q raro xq tengo muchos return
    return state
}

const coursesReducer = (state = initialCourses,action) => {
    return state
}
//ese combine es pa agregar mas de un reducer y tienee q estar en un objeto
export default createStore(combineReducers({rootReducer,coursesReducer}),composeWithDevTools())