import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './style.css'
import { SET_ACCESS } from '../Redux/Slice'

function Row({ userData }) {

    const [dropdown, setDropdown] = useState(false)
    const dispatcher = useDispatch()

    function onAccessSelect(e) {
        dispatcher(SET_ACCESS({
            email: userData.email,
            access: e.target.innerText
        }))
        setDropdown(false)
    }

    return (
        <div className='oslash'>
            <div className='row-box'>
                <img className='web-img' src={require(`../Images/${userData.image}`)} alt='user data' /> 
                <p>{userData.name} <br />
                    <span className='txt-light'>{userData.email}</span> </p>
            </div>
            <div className='drop-down'>
                <button
                    onClick={() => setDropdown(prev => !prev)}
                >{userData.access} <img src={require('../Images/dropdown.png')} alt='drop down' /></button>
                <div
                    style={dropdown ? { display: 'block' } : {}}
                    className='dropdown-contents'>
                    <div onClick={onAccessSelect}>Full access</div>
                    <div onClick={onAccessSelect}>Can edit</div>
                    <div onClick={onAccessSelect}>Can view</div>
                    <div onClick={onAccessSelect}>No access</div>
                </div>
            </div>
        </div>
    )
}

export default Row