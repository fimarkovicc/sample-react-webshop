import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WorkshopList from './WorkshopList'
import WorkshopItemFull from './WorkshopItemFull'
import Sidebar from './Sidebar'
import SidebarBack from './SidebarBack'

const Main = (props) => {
    
    return (
        <div className="main">
            <div className="wrapper">
                
                <Switch>            
                <Route exact path="/"><Sidebar /><WorkshopList data={props.data} /></Route>
                <Route exact path="/:category"><Sidebar /><WorkshopList data={props.data} /></Route>
                <Route path="/:category/:id"><SidebarBack /><WorkshopItemFull data={props.data} /></Route>    
                </Switch>
                </div>
        </div>
    )
}
 
export default Main;