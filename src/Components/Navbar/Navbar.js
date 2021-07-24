import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa';
import {SidebarData} from '../Data/SidebarData';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <nav>
            <div className="title-container">
                <Link to="/" className="title">Buzz</Link>
            </div>

            <div className="menu-container">
                <FaBars className="menu-bars" onClick={showSidebar}/>
            </div>

            <ul className={sidebar ? "nav-menu active" : "nav-menu"} onClick={showSidebar}>
                <FaTimes className="menu-close"/>
               {SidebarData.map((link, index) => {
                   const {title, path, className} = link;
                   return (
                       <li key={index}>
                           <Link to={path} className={className}>{title}</Link>
                       </li>
                   )
               })}
            </ul>



        </nav>
    )
}

export default Navbar
