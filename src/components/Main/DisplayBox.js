import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Row from './Row'
import toggleON from '../Images/toggleON.png'
import toggleOFF from '../Images/toggleOFF.png'

function DisplayBox({ show, setShowSearchBox, setShareAndDisplay }) {

    const selectedUsers = useSelector(state => state.usersList.selectedUsers)
    const [toggle, setToggle] = useState(false)
    if (show) {
        return (
            <div className='display-box'>
                <div className='share-to-web'>
                    <div className='img-txt'>
                        <img className='web-img' src={require('../Images/Icon.png')} alt='web'/>
                        <p>Share to web <br />
                            <span className='txt-light'>Publish and share link with anyone</span> </p>
                    </div>
                    <img
                        onClick={() => setToggle(prev => !prev)} alt='toggle'
                        className='toggle-btn' src={toggle ? toggleON : toggleOFF} />
                </div>
                <div className='input-display-box'>
                    <div className='input-invite'>
                        <input
                            onFocus={() => {
                                setShowSearchBox(true)
                                // setShowDisplayBox(false)
                                setShareAndDisplay(false)
                            }}
                            placeholder='Peoples, emails, groups' />
                        <button className='invite'>Invite</button>
                    </div>

                    {/* --------ROWS-------- */}
                    {selectedUsers.map((userData, idx) => {
                        return <Row userData={userData} key={idx} />
                    })}

                </div>
                <div className='learn-link'>
                    <div className='learn'>
                        <img src={require('../Images/ques.png')} alt='question' />
                        <p>learn about sharing</p>
                    </div>
                    <div className='link'>
                        <img src={require('../Images/link.png')} alt='question' />
                        <p>Copy link</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayBox