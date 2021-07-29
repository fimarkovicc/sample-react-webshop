import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { timeFormat, dateFormat } from './../utils/timeDateFormat.js'
import WorkshopItem from './WorkshopItem'
import AddToCartFull from './AddToCartFull'
import { TiBrush } from 'react-icons/ti'
import { AiOutlineLayout } from 'react-icons/ai'
import { MdCode } from 'react-icons/md'
import { BsLightning } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'


const WorkshopItemFull = (props) => {
    
    const { id: itemId } = useParams()   
    const [user, setUser] = useState(null)

    const workshop = props.data.find(workshop => workshop.id == itemId)
    const time = timeFormat(workshop.date) 
    const date = dateFormat(workshop.date) 

    let icon
    workshop.category == 'design' ? icon = <TiBrush />
        : workshop.category == 'frontend' ? icon = <AiOutlineLayout />
        : workshop.category == 'backend' ? icon = <MdCode />
        : icon = <BsLightning />

    const similarWorkshops = props.data
    .filter(item => item.id != itemId && item.category == workshop.category)    
    
    
    useEffect(() => {
        
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => setUser(data.find(user => user.id == workshop.userId).name))
            
    }, [])
    
    return (
        
        
        <div className="workshop-item-full">
            <img src={workshop.imageUrl} alt={workshop.title} className="workshop-item-full__img" />

            <div className="workshop-item-full__content">
                <div className="workshop-item-full__content__desc">
                    <span  className="workshop-item-full__content__desc__meta">
                        <span className="workshop-item-full__content__desc__meta__icon">{icon}</span>
                        <span className="workshop-item-full__content__desc__meta__datetime"><AiOutlineCalendar />{date}</span>
                        <span className="workshop-item-full__content__desc__meta__datetime"><AiOutlineClockCircle />{time}</span>
                    </span>
                    <h2 className="workshop-item-full__title">{workshop.title}</h2>
                    <h5 className="workshop-item-full__author"><span>WITH</span> {user}</h5>
                    <p className="workshop-item-full__desc">{workshop.desc}</p>
                </div>
                
                 <AddToCartFull workshop={workshop} />
                
            </div>
            <div className="workshop-item-full__similar">
                {similarWorkshops.length > 0 && <h4>Similar Workshops</h4>}
                <ul className="workshop-list">
                {similarWorkshops.length > 0 && similarWorkshops.slice(0, 3).map(item => 
                <li className="workshop-list__item" key={item.id}><WorkshopItem workshop={item} /></li>)}
                </ul>
            </div>
            </div>
            

            
        
        
    )
}
 
export default WorkshopItemFull