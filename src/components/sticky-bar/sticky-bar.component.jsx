import React from 'react';
import './sticky-bar.styles.css';
import IPL from '../../img/logo-ipl.png'

class StickyBar extends React.Component {
    render(){
        return (
            <div className='sticky-bar'>
                <div className='left-bar'>
                    <img src={IPL} height={60} width={140}></img>
                     <div className='sf-sticky-bar-container'>
                        <input aria-label='Search' className='search-field sf-sticky-bar' placeholder='Search' />
                    </div>
                </div>
                {/*<div className='center-bar'></div>*/}
                <div className='right-bar'>
                    <div id='fullscreenButtonContainer'></div>
                    <div className='login-section-container'>                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StickyBar;