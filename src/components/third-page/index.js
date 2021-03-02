import React from 'react'
import Navbar from './navbar'
import Page from './page'
import Footer from './footer'
import Body from './body'
import './index.css'

const main = () => {
    return (
        <div>
            <Navbar />
            <div className="body">
                <Body />
                <Page />
            </div>
            <Footer />
        </div>
    )
}

export default main