import { createStore } from 'redux'
import { ADD_TO_CART } from './actions'

const initialStore = {
    cart: []
}
//sea cual sea el dispatch q suceda el reducer lo recibe
const rootReducer = (state = initialStore,{id,type}) => {
    if(state.cart.find(a => a === id)) return state

    if(type === ADD_TO_CART){
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }
    return state
}
export default createStore(rootReducer)