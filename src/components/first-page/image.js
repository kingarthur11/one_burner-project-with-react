import React from 'react'
import slack from '../../asset/part3/slack.PNG'
import gmail from '../../asset/part3/gmail.PNG'
import linked from '../../asset/part3/linked.PNG'
import mailchip from '../../asset/part3/mailchip.PNG'
import dropbox from '../../asset/part3/dropbox.PNG'
import facebook from '../../asset/part3/facebook.PNG'
import onenote from '../../asset/part3/onenote.PNG'
import messanger from '../../asset/part3/messanger.PNG'
import whasap from '../../asset/part3/whatsap.PNG'
import sendgrid from '../../asset/part3/sendgrid.PNG'
import github from '../../asset/part3/github.PNG'
import outlook from '../../asset/part3/outlook.PNG'
import box from '../../asset/part3/box.PNG'
import teams from '../../asset/part3/teams.PNG'
import microsoftsharepoint from '../../asset/part3/microsoftsharepoint.PNG'
import youtub from '../../asset/part3/youtub.PNG'
import ziplin from '../../asset/part3/ziplin.PNG'
import excel from '../../asset/part3/excel.PNG'
import powerpoint from '../../asset/part3/powerpoint.PNG'
import access from '../../asset/part3/access.PNG'
import wordpress from '../../asset/part3/wordpress.PNG'
import './image.css'



const Image = () => {
    return (
        <div>
            <div className="style-image">
                <img src={slack} />
                <img src={gmail} />
                <img src={linked} />
                <img src={mailchip} />
                <img src={dropbox} />
                <img src={facebook} />
                <img src={onenote} />
                <img src={messanger} />
                <img src={whasap} />
                <img src={sendgrid} />
                <img src={github} />
            </div>
            <div className="style-image">
                <img src={outlook} />
                <img src={box} />
                <img src={onenote} />
                <img src={teams} />
                <img src={microsoftsharepoint} />
                <img src={youtub} />
                <img src={ziplin} />
                <img src={excel} />
                <img src={powerpoint} />
                <img src={access} />
                <img src={wordpress} />
            </div>
        </div>
    )
}

export default Image
