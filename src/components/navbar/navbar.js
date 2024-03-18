import './Navbarstyle.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

function Navbar(){

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className='navbar'>
            <div className='nama-perusahaan'>
                <a href='../App'>PT. Pandawa Cipta Mandiri</a> 
            </div>
            <div className='menu-bar' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMobileMenu} href='index.html'>Dashboard</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMobileMenu} href='index.html'>Master Data <i className='fas fa-caret-down' /></a>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMobileMenu} href='index.html'>Deliver</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMobileMenu} href='index.html'>Purchases</a>
                    </li>
                </ul>
            </div> 
        </nav>
        </>
    )
}

export default Navbar