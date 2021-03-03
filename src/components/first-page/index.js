import React from 'react'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import Image from './image'
import Footer from '../third-page/footer'
import Navbar from '../third-page/navbar'

const main = () => {
    return (
        <div>
            <Navbar />
            <SectionOne />
            <Image />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    )
}

export default main
