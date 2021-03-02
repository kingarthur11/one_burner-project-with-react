import React from 'react'
import './section-one.css'
import dangote from '../../asset/part1/dangote.png'
import egyptair from '../../asset/part1/egyptair.png'
import gtbank from '../../asset/part1/gtbank.png'
import HeaderLogo from '../../asset/part1/HeaderLogo.png'
import MTN from '../../asset/part1/MTN.png'
import paystack from '../../asset/part1/paystack.png'
import standardbank from '../../asset/part1/standardbank.png'
import frame from '../../asset/part2/Frame.png'
import frame1 from '../../asset/part2/Rectangle22.png'
import frame2 from '../../asset/part2/Rectangle25.png'
import frame3 from '../../asset/part5/etty.png'
import frame4 from '../../asset/part5/kenya.png'
import frame5 from '../../asset/part5/ussama.png'

const SectionOne = () => {
    return (
        <div className="style-body">
            <div className="style-body-1">
                <div className="style-body-1-left">
                    <h2>Collaborate with your team and get more done</h2>
                    <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
                    <button>Start Free Trial</button>
                </div>
                <div className="style-part">
                    <div className="style-right1">
                        <div className="style-right-1">
                            <img src={frame5}/>
                            <div className="style-right-text">
                                <h2>Mitchelle</h2>
                                <p>Admin Officer</p>
                            </div>
                        </div>
                        <p className="style-right-p">Time to implement the new changes</p>
                    </div>
                    <div className="style-right2">
                        <p className="style-right-p2">Yes! We are getting it done</p>
                        <div className="style-right-2">
                            <img src={frame3}/>
                            <div className="style-right-text">
                                <h2>Adeola</h2>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="style-right3">
                        <div className="style-right-3">
                            <img src={frame4}/>
                            <div className="style-right-text">
                                <h2>Wanyama</h2>
                                <p>Admin Officer</p>
                            </div>
                        </div>
                        <p className="style-right-p3">Deploying on production at 2AM</p>
                    </div>
                </div>
            </div>
            <p className="style-body-p">Over 500+ companies bond teams together with Oneburner</p>
            <div className="style-body-image">
                <img src={paystack} />
                <img src={egyptair} />
                <img src={dangote} />
                <img src={standardbank} />
                <img src={MTN} />
                <img src={gtbank} />
                <img src={HeaderLogo} />
            </div>
            <div className="style-body-navbar">
                <ul className="style-body-list">
                    <button>CRM & Sales</button>
                    <li>Human Resources</li>
                    <li>Marketing</li>
                    <li>Remote Work</li>
                    <li>Project Management</li>
                    <li>Social Media</li>
                </ul>
            </div>
            <div>
                <div className="frame1">
                    <div className="frame-text">
                        <h3>Manage team activities all in one place</h3>
                        <p>Keep your team organized and informed with activities that are up to date.</p>
                    </div>
                    <img src={frame2}/>
                </div>
                <div className="frame2">
                    <img src={frame} />
                    <div className="frame-text">
                        <h3>Bring your team up to speed</h3>
                        <p>Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
                    </div>
                </div>
                <div className="frame1">
                    <div className="frame-text">
                        <h3>Automated task timeline</h3>
                        <p>View dates, projects, calendar, sprint and more with reliability.</p>
                    </div>
                     <img src={frame1} />
                </div>
                
                <img />
            </div>
            <p className="style-body-p">Integrate with your favourite tools easily in one click</p>
        </div>
    )
}

export default SectionOne
