import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WorkshopItem from './WorkshopItem'

const WorkshopList = (props) => {
    
    const { category } = useParams()
    const data = props.data
    const count = category ? data.filter(workshop => workshop.category === category).length : data.length
    return (
        
        <div className="worshop-listing">
            <div className="worshop-listing__header">
                <h1 className="worshop-listing__title">Workshops</h1>
                <p className="worshop-listing__counter">displayed: <span className="worshop-listing__count">{count}</span></p>
            </div>
            <ul className="workshop-list">
                {category ? 
                data.filter(workshop => workshop.category === category)
                    .map(workshop => <li className="workshop-list__item" key={workshop.id}><WorkshopItem workshop={workshop} /></li>) 
                    :
                data.map(workshop => <li className="workshop-list__item" key={workshop.id}><WorkshopItem workshop={workshop} /></li>)}
            </ul>
        </div>
    )
}
 
export default WorkshopList