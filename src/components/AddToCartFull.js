import React, { useContext, useState } from 'react'
import { CartContext } from './../context/CartContext'

const AddToCartFull = (props) => {
    const {id, title, price, imageUrl} = props.workshop
    const {updateCart} = useContext(CartContext)
    const [qty, setQty] = useState(5)
    const [subTotal, setsubTotal] = useState(price * qty)
    const priceParsed = parseFloat(price).toFixed(2)

    function handleChange(e){
        const value = e.target.value
        setQty(parseInt(value))
        setsubTotal(price * parseInt(value))
    }
    
    return (
        <div className="workshop-item-full__content__add-cart">
            <h6 className="workshop-item-full__content__add-cart__title">Buy Your Ticket</h6>
            <span className="workshop-item-full__content__add-cart__price">{priceParsed} <span>EUR</span></span>
            <div className="workshop-item-full__content__add-cart__buy">
                <select onChange={handleChange} value={qty} name="qty">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>                
                </select>
                <button onClick={() => updateCart({id, title, price, qty, imageUrl})}>Add to Cart</button>
            </div>
            <span className="workshop-item-full__content__add-cart__subtotal">subtotal: {subTotal} EUR</span>
        </div>
    )
}
 
export default AddToCartFull