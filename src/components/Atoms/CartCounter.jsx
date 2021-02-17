import React from 'react'
import {connect} from 'react-redux'

const CartCounter = ({cartLength}) => (
    <li>
        <button className="button-tiny-ghost">{`Carrito: ${cartLength.length}`}</button>
    </li>
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