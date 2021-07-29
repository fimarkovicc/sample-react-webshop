import React, { useContext } from 'react'
import CartCounter from './CartCounter'
import CartItem from './CartItem'
import { CartContext } from '../context/CartContext'
import { RiCloseFill } from 'react-icons/ri'

const Cart = (props) => {
    const { cart, modifyCart, removeFromCart } = useContext(CartContext)

    const subtotal = cart.reduce(function (accumulator, item) {
        return accumulator + (item.qty * item.price)
      }, 0)
    
    return (
        <div className={'cart ' + props.visibility}>
            <div className="cart__header">
                <CartCounter toggle={props.toggle} />
                <span className="cart__header__close" onClick={() => props.toggle()}><RiCloseFill /></span>
            </div>

            {cart.map(item => <CartItem key={item.id} item={item} modifycart={modifyCart} removeItem={removeFromCart} />)}  

            <div className="cart-footer">
                <div className="cart-footer__subtotal">
                    <h5>SUBTOTAL</h5>
                    <span className="cart-footer__price">{subtotal} <span>EUR</span></span>
                        
                </div> 
                <button className="cart-footer__checkout" onClick={() => {props.togglechekout(); props.toggle()}} disabled={!cart.length}>CHECKOUT</button>   
            </div>      
        </div>
    )
}
 
export default Cart