import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

const Sidebar = () => {
    const history = useHistory()

    let url = history.location.pathname
    url = url.slice(0, url.lastIndexOf('/'))

    function handleClick(){
        history.push(url)
    }

    return (
        <div className="sidebar">
            <a onClick={handleClick} className={'sidebar__back'} to="/"><BsArrowLeft className="sidebar__nav__nav_item_link__icon" />Go back</a>
        </div>
    )
}
 
export default Sidebar