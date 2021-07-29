import React, { useContext } from 'react'
import { CartContext } from './../context/CartContext'

import { BiCart } from "react-icons/bi";

const CartCounter = (props) => {
    const { cart } = useContext(CartContext)
    let sum = cart.reduce(function (accumulator, item) {
        return accumulator + item.qty
      }, 0)
    
    return (
        <div className="cart-counter">
        {sum ? 
        <span className="cart-counter__full" onClick={() => props.toggle(true)}><BiCart /> <span className="cart-counter__count">{sum} Workshops</span></span>
        : 
        <span onClick={() => props.toggle(true)}><BiCart /><span  className="cart-counter__count">Cart is empty</span></span>} 
               
        </div>
    )
}
 
export default CartCounter