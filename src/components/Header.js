import React, {useState} from 'react'
import CartCounter from './CartCounter'
import Cart from './Cart'
import Checkout from './Checkout'
import CheckoutConfirm from './CheckoutConfirm'
import logo from './../assets/images/logo.png'

const Header = () => {
    const [cartVis, setCartVis] = useState(false)
    const cartVisibility = cartVis ? 'visible' : ''

    function toggleCart(){
        setCartVis(!cartVis)
    }

    const [checkoutVis, setCheckoutVis] = useState(false)
    const checkoutVisibility = checkoutVis ? 'visible' : ''

    function toggleCheckout(){
        setCheckoutVis(!checkoutVis)
    }

    const [checkoutConfirmVis, setCheckoutConfirmVis] = useState(false)
    const checkoutConfirmVisibility = checkoutConfirmVis ? 'visible' : ''

    function toggleCheckoutConfirm(){
        setCheckoutConfirmVis(!checkoutConfirmVis)
    }
    
    return (
        <div className="header">
            <div className="wrapper">
                <img src={logo} alt="logo" />       
                <CartCounter toggle={setCartVis} />             
                <Cart visibility={cartVisibility} toggle={toggleCart} togglechekout={toggleCheckout} />

                <Checkout 
                visibility={checkoutVisibility} 
                toggle={toggleCheckout} 
                confirmvisibility={checkoutConfirmVisibility}
                toggleconfirm={toggleCheckoutConfirm}
                />

                <CheckoutConfirm
                visibility={checkoutConfirmVisibility} 
                toggle={toggleCheckoutConfirm} 
                />
            </div>
        </div>
    )
}
 
export default Header