import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CartItem = (props) => {
    const {id, title, price, qty, imageUrl} = props.item
    const priceParsed = parseFloat(price).toFixed(2)

    function handleChange(e){
        const value = parseInt(e.target.value)
        props.modifycart({id, title, price, qty: value, imageUrl})
    }

    function handleRemove(){
        props.removeItem({id})
    }

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={title} className="cart-item__image" />
            <div className="cart-item__data">
                <span className="cart-item__data__delete" onClick={handleRemove}><RiDeleteBin6Line /></span>
                <h3 className="cart-item__data__title">{title}</h3>   
                <select onChange={handleChange} value={qty} name="itemQty">
                    <option value={qty}>{qty}</option>              
                    <option value={qty-qty+1}>{qty-qty+1}</option>              
                    <option value={qty-qty+2}>{qty-qty+2}</option>              
                    <option value={qty+5}>{qty+5}</option>              
                    <option value={qty+10}>{qty+10}</option>              
                </select>
                <span className="cart-item__data__price">{priceParsed} EUR</span>
            </div>
            
        </div>
    )
}
 
export default CartItem