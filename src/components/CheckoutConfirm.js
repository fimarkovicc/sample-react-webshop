import React, { useContext } from 'react'
import { CartContext } from './../context/CartContext'
import { Link } from 'react-router-dom'

const CheckoutConfirm = (props) => {
    const { emptyCart } = useContext(CartContext)

    return (
        
            <div className={'checkout-confirm ' + props.visibility}>
                <h2>Thank you!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae commodi earum?</p>
                <button onClick={() => {props.toggle(); emptyCart()}}><Link to="/">Back to Shop</Link></button>
                </div>
    )
}
 
export default CheckoutConfirm