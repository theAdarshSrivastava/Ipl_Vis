import React from 'react';
import './navigation.styles.css';
import logo from '../../img/logo.png';
import logosmall from '../../img/logo-small.png';
import ipl from '../../img/iplmaster_logo.png';

function Nav() {
    return (
        <nav className='nav-menu'>
            <div className='logo-container'>
                <a href='https://socialcops.com' onClick={(e) => {e.preventDefault();}}><img className='logo' src={ipl} alt='Logo'/></a>
            </div>
            <div className='nav-link-container'>
                <a href='https://github.com/theAdarshSrivastava/Ipl_Vis' onClick={(e) => {e.preventDefault();}}><i className="fas fa-home-alt"></i> <span className='nav-link-name'>Dashboard</span></a>
                <a href='https://github.com/theAdarshSrivastava/Ipl_Vis' onClick={(e) => {e.preventDefault();}}><i className="fas fa-question"></i> <span className='nav-link-name'>FAQs</span></a>
            </div>
        </nav>
    )
}

export default Nav;