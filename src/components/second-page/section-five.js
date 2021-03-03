import React from 'react'
import './section-five.css'
import frame from '../../asset/part6/Ellipse.png'

const SectionFive = () => {
    return (
        <div className="style-page1">
            <p className="style-page">
                Best. Product. Ever! We like Oneburner more and more 
                each day because it makes our work a lot easier. It's just amazing. 
                Very easy to use, impressed us on multiple levels. Thank you so much for 
                your help and is worth much more than we paid. We were treated like royalty.</p>
            <div className="style-section">
                <img src={frame}/>
                <div className="style-text">
                     <h3>Kemi Hassan</h3>
                    <p>CEO, Saharaa Inc. </p>
                </div>
            </div>
        </div>
    )
}

export default SectionFive
