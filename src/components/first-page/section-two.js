import React from 'react'
import frame1 from '../../asset/part4/Rectangle21.png'
import frame2 from '../../asset/part4/Rectangle19.png'
import frame3 from '../../asset/part4/Ellipse 1.png'

import './section-two.css'

const SectionTwo = () => {
    return (
        <div>
            <div className="frame2">
                <img src={frame1}/>
                <div className="frame-text">
                    <h2>Timeless report generator</h2>
                    <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
                </div>
            </div>
            <div className="frame2">
                <div className="frame-text">
                    <h2>Efficient lead management</h2>
                    <p>Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.</p>
                </div>
                <img src={frame2}/>
            </div>
            <div>
                <div className="frame2">
                    <div className="frame-list">
                        <div className="frame-list-right">
                            <i className="fa fa-comment-alt"></i>
                            <p>Live chat</p>
                            <i className="fa fa-window"></i>
                            <p>Mail support</p>
                            <i className="fa fa-phone-alt"></i>
                            <p>Phone call support</p>
                        </div>
                        <img src={frame3}/>
                    </div>
                    <div className="frame-text">
                        <h2>24/7 customer support</h2>
                        <p>Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SectionTwo
