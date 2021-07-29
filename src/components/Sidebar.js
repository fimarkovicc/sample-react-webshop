import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { TiBrush } from 'react-icons/ti'
import { AiOutlineLayout } from 'react-icons/ai'
import { MdCode } from 'react-icons/md'
import { BsLightning } from 'react-icons/bs'

const Sidebar = () => {
    const history = useHistory()

    const [url, setUrl] = useState(history.location.pathname)
        
    function handleChange(e){
        const {value} = e.target
        setUrl(value)
        history.push(value)
    }

    return (
        <>
        <div className="sidebar">
            <h4 className="sidebar__title">filter by category</h4>
            <ul className="sidebar_nav">
                <li className="sidebar__nav__nav_item"><NavLink activeClassName="active" className={'sidebar__nav__nav_item_link'} exact to="/">All</NavLink></li>
                <li className="sidebar__nav__nav_item"><NavLink className={'sidebar__nav__nav_item_link'} to="/design"><TiBrush className="sidebar__nav__nav_item_link__icon" />Design</NavLink></li>
                <li className="sidebar__nav__nav_item"><NavLink className={'sidebar__nav__nav_item_link'} to="/frontend"><AiOutlineLayout className="sidebar__nav__nav_item_link__icon" />Frontend</NavLink></li>
                <li className="sidebar__nav__nav_item"><NavLink className={'sidebar__nav__nav_item_link'} to="/backend"><MdCode className="sidebar__nav__nav_item_link__icon" />Backend</NavLink></li>
                <li className="sidebar__nav__nav_item"><NavLink className={'sidebar__nav__nav_item_link'} to="/marketing"><BsLightning className="sidebar__nav__nav_item_link__icon" />Marketing</NavLink></li>
            </ul>
        </div>
        
        <div className="sidebar-mobile">
        <select value={url} onChange={handleChange} name="navigation">
                    <option value="/">all</option>
                    <option value="/design">design</option>
                    <option value="/frontend">frontend</option>
                    <option value="/backend">backend</option>
                    <option value="/marketing">marketing</option>
                </select>
        </div>
        
        </>
    )
}
 
export default Sidebar