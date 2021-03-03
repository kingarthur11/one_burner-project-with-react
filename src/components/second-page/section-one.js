import React from 'react'
import frame3 from '../../asset/part5/etty.png'
import frame4 from '../../asset/part5/kenya.png'
import Companies from '../first-page/companies'

const SetionOne = () => {
    return (
        <div>
            <div>
                <img src={frame3}/>
                <div>
                    <h2>Modern solution built for your enterprise growth</h2>
                    <p>Centralize your team in a secure, flexible and managed platform</p>
                    <button>Request a Demo</button>
                </div>
                <img src={frame4}/>
            </div>
            <Companies />
        </div>
    )
}

export default SetionOne
