import React from 'react'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import SectionFive from './section-five'
import SectionSix from './section-six'
import Navbar from '../third-page/navbar'
import Footer from '../third-page/footer'

const Main = () => {
    return (
        <div>
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Footer />
        </div>
    )
}

export default Main