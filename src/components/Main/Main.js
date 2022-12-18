import React, { useState } from 'react'
import DisplayBox from './DisplayBox'
import SearchBox from './SearchBox'
import './style.css'

function Main() {

    const [showDisplayBox, setShowDisplayBox] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [shareAndDisplay, setShareAndDisplay] = useState(true)

    return (
        <div className='main'>
            {shareAndDisplay &&
                <div>
                    <button className='share-btn'
                        onClick={() => setShowDisplayBox(true)}
                    >
                        Share
                        <img className='share-icon' alt='share'
                            src={require('../Images/Vector.png')} />
                    </button>

                    <DisplayBox
                        show={showDisplayBox}
                        setShowSearchBox={setShowSearchBox}
                        // setShowDisplayBox={setShowDisplayBox} 
                        setShareAndDisplay={setShareAndDisplay} />
                </div>}

            <SearchBox
                show={showSearchBox}
                setShowSearchBox={setShowSearchBox}
                setShareAndDisplay={setShareAndDisplay} />
        </div>
    )
}

export default Main