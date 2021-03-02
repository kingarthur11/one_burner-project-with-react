import React from 'react'
import './body.css'

const Body = () => {
    return (
        <div>
            <form>
                <ul className="form-style-1">
                    <div className="form-name">
                        <li><label>Last Name<input type="text"/></label></li>
                        <li><label> First Name<input type="text"/></label></li>
                    </div>
                    <div className="form-email">
                        <li><label> Work Email</label><input type="text"/> </li>
                        <li><label>Phone Number</label><input type="text"/></li>
                        <li><label> Product of Interest</label>
                            <select>
                                <option>NIGERIA</option>
                                <option>GHANA</option>
                                <option>SOUTH AFRICA</option>
                                <option>EGYPT</option>
                                <option>KENYA</option>
                                <option>TUNISIA</option>
                                <option>MALI</option>
                                <option>TANZANIA</option>
                                <option>TOGA</option>
                            </select>
                        </li> 
                    </div>
                    <div className="form-company">
                        <li><label>Company Name<input type="text"/></label></li>
                        <li><label>Company Size</label><select></select></li>
                    </div>
                    <div className="form-text">
                         <li>
                            <label>How can our expert help you?</label>
                            <textarea name="field5" className="field-long field-textarea"></textarea>
                        </li>
                    </div>
                </ul>
            </form>
        </div>
    )
}

export default Body
