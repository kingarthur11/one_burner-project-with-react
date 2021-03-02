import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <div>
            <span>logo</span>
            <div>
                <div>
                    <ul>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Enterprice</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <ul>
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
