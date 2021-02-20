import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ADD_TO_CART,DELETE_FROM_CART,GET_COURSE_LIST } from './actions'
import thunk from 'redux-thunk'


const initialStore = {
    cart: []    
}

const initialCourses = {
    courses: []
}
//sea cual sea el dispatch q suceda el reducer lo recibe
const cartReducer = (state = initialStore,{id,type}) => {
    

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
    if(action.type === GET_COURSE_LIST) {
        return {
            ...state,
            courses: action.courses
        }
    }
    return state
}
//ese combine es pa agregar mas de un reducer y tienee q estar en un objeto
//thunk para peticiones asincronas
/* export default createStore(combineReducers({cartReducer,coursesReducer}),composeWithDevTools()) */


export default createStore(combineReducers({cartReducer,coursesReducer}),composeWithDevTools(applyMiddleware(thunk)))