import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { timeFormat, dateFormat } from './../utils/timeDateFormat.js'
import { CartContext } from './../context/CartContext'
import { TiBrush } from 'react-icons/ti'
import { AiOutlineLayout } from 'react-icons/ai'
import { MdCode } from 'react-icons/md'
import { BsLightning } from 'react-icons/bs'

const WorkshopItem = (props) => {
    const {id, title, price, date, imageUrl, category} = props.workshop
    const time = timeFormat(date)
    const dateF = dateFormat(date)
    const {cart, updateCart} = useContext(CartContext)
    const priceParsed = parseFloat(price).toFixed(2)

    let icon
    category == 'design' ? icon = <TiBrush />
        : category == 'frontend' ? icon = <AiOutlineLayout />
        : category == 'backend' ? icon = <MdCode />
        : icon = <BsLightning />
    
    return (
        <div className="workshop-item">
            <Link to={`/${category}/${id}`}>
                <img src={imageUrl} alt={title} className="workshop-list__item__image" />
            </Link>
            <div className="workshop-item__text"> 
                <span className="workshop-item__text__icon">{icon}</span>
                <span className="workshop-item__text__date">{dateF} {time}</span>
                <Link to={`/${category}/${id}`}>
                    <h3 className="workshop-item__text__title">{title}</h3>
                </Link>
                <span className="workshop-item__text__price">{priceParsed} <span>EUR</span></span>
                <button className="workshop-item__text__button" onClick={() => updateCart({id, title, price, qty: 1, imageUrl})}>Add to Cart</button>
            </div>     
        </div>
    )
}
 
export default WorkshopItem