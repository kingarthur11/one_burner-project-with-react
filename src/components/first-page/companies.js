import React from 'react'
import './section-one.css'
import dangote from '../../asset/part1/dangote.png'
import egyptair from '../../asset/part1/egyptair.png'
import gtbank from '../../asset/part1/gtbank.png'
import HeaderLogo from '../../asset/part1/HeaderLogo.png'
import MTN from '../../asset/part1/MTN.png'
import paystack from '../../asset/part1/paystack.png'
import standardbank from '../../asset/part1/standardbank.png'

const Companies = () => {
    return (
        <div>
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
        </div>
    )
}

export default Companies
