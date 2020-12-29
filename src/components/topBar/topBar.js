import React from 'react';
import './topBar.css'
import navImg from './nav.png';
import icon from './icon.png'

export class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.close = this.close.bind(this);

    }

    click() {
        let sidebar = document.getElementById('mySidenav');
        sidebar.style.width = '250px';


    }
    close() {
        let sidebar = document.getElementById('mySidenav');
        sidebar.style.width = '0px';


    }

    render() {

        return (
            <div className='topBar'>
                <img className='icon' src={icon} alt='logo'/>
                <button className='nav' onClick={this.click}><img src={navImg} alt='nav button'/></button>

                <div id="mySidenav" className="sidenav">
                    <a  href="#" className="closebtn" onClick={this.close}>&times;</a>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    </div>

            </div>
        );

        
    }
}