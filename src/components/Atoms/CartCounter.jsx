import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const CartCounter = ({cartLength}) => (
    <>
        <li className="lg-mr-3">
            <NavLink className="link s-column s-cross-center" to="/usuarios">
                <svg className="icon to-lg s-mb-0">
                <use href="#notes"></use>
                </svg>
                <span>
                    <button className="button-tiny-ghost">{`Carrito: ${cartLength.length}`}</button>
                   {/* {`Carrito: ${cartLength.length}`} */}
                </span>
            </NavLink>
        </li>
    </>
    
)
//mapear el estado global de mi app y pasarle a este componente(CartCounter) lo q yo quiera x props
const mapStateToProps = state => (
    {
        cartLength: state.cart
    }
)
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps,mapDispatchToProps)(CartCounter)