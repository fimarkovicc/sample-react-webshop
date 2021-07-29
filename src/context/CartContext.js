import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContextProvider(props){
    const [cart, setCart] = useState([])

    // Adds qty or creates new item
    function updateCart(newItem){
        const exists = cart.find(item => item.id == newItem.id)
        
        if(!exists){
            setCart((cart) => {
                return [...cart, newItem]
            })
        }else{
            let newCart = cart.filter(item => item.id != newItem.id)
            newItem.qty += exists.qty
            setCart([...newCart, newItem])
        }        
    }

    // Replaces qty
    function modifyCart(newItem){
        let newCart = cart.filter(item => item.id != newItem.id)
        setCart([...newCart, newItem])
    }

    function removeFromCart(itemToRemove){
        let newCart = cart.filter(item => item.id != itemToRemove.id)
        setCart([...newCart])
    }

    function emptyCart(){
        setCart([])
    }


        return(
            <CartContext.Provider value={{cart, updateCart, modifyCart, removeFromCart, emptyCart}}>
                {props.children}
            </CartContext.Provider>
        )    
}