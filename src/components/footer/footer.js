import React from 'react';
import './footer.css';
import icon from  './icon_footer.png';

export class Footer extends React.Component {

    render() {
        return(
            <div className='footer'>
                <img className='icon_footer' src={icon} alt="logo footer"/>

            </div>
        );
    }
}