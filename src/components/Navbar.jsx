import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Himanshu</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <a href='http://www.Himanshu.com' >
                    <li>Home</li>
                    </a>
                    <a href='http://www.services.com'>
                    <li>Service</li>
                    </a>
                    <a href='http://www.experience.com'>
                    <li>Experience</li>
                    </a>
                    <a href='http://www.porfolio.com'>
                    <li>Porfolio</li>
                    </a>
                    <a href='http://www.reviws.com' >
                    <li>Testimoials</li>
                    </a>
                </ul>
            </div>
            <button className="button n-button">
                Contact us
            </button>
        </div>
    </div>
  )
}

export default Navbar