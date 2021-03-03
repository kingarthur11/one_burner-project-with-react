import React from 'react'
import './navbar.css'
import Logo from '../../asset/part6/Logo.png'

const navbar = () => {
    return (
        <div >
            <div className="style-navbar">
                <span>
                    <img src={Logo} />
                </span>
                <div>
                    <ul className="style-navbar-list1">
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Enterprice</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <ul className="style-navbar-list1">
                        <li>Contact Sales</li>
                        <li>Login</li>
                        <button>Try for free</button>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default navbar
