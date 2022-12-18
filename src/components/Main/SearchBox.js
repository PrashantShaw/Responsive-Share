import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { ADD_USER } from '../Redux/Slice'

function SearchBox({ show, setShowSearchBox, setShareAndDisplay }) {
    const availableUsersGrps = useSelector(state => state.usersList.availableUsersGrps)
    const dispatcher = useDispatch()
    const [dropdown, setDropdown] = useState(false)
    const [selected, setSelected] = useState({})
    const [searchTxt, setSearchTxt] = useState('')
    function onAccessSelect(e) {
        setSelected(rest => {
            return { ...rest, access: e.target.innerText }
        })
        setDropdown(false)
    }
    if (show) {
        return (
            <div className='search-box'>
                <div className='input-access-invite'>
                    {!selected.name ? <input onChange={(e) => setSearchTxt(e.target.value)}
                        type='text' value={searchTxt}
                        placeholder='Search emails, names and groups' />
                        : <p className='selected-badge'>{selected.name + ' '}
                            <span onClick={() => setSelected({})}>X</span></p>}
                    <div className='access-invite'>
                        <div className='drop-down'>
                            <button style={{ backgroundColor: '#F3F4F6' }}
                                onClick={() => setDropdown(prev => !prev)}
                            >{selected.access ? selected.access : 'Full access'}
                                <img src={require('../Images/dropdown.png')} alt='drpdwn' /></button>
                            <div
                                style={dropdown ? { display: 'block' } : {}}
                                className='dropdown-contents'>
                                <div onClick={onAccessSelect}>Full access</div>
                                <div onClick={onAccessSelect}>Can edit</div>
                                <div onClick={onAccessSelect}>Can view</div>
                                <div onClick={onAccessSelect}>No access</div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                dispatcher(ADD_USER(selected))
                                setShowSearchBox(false)
                                setShareAndDisplay(true)
                            }}
                            className='invite-btn'>Invite</button>
                    </div>
                </div>
                <div className='search-results'>
                    <p>Selec a person</p>
                    {availableUsersGrps.users
                        .filter(user => user.name.includes(searchTxt))
                        .map(user => <div className='users'>

                            <SearchRow data={user} />
                        </div>)}
                    <p>Selec a group</p>
                    {availableUsersGrps.groups
                        .filter(grp => grp.name.includes(searchTxt))
                        .map(grp => <div className='groups'>

                            <SearchRow data={grp} />
                        </div>)}
                </div>
            </div>
        )
    }
    function SearchRow({ data }) {
        return (
            <div className='search-row' onClick={() => setSelected(data)}>
                <img src={require(`../Images/${data.image}`)} alt='user' />
                <p>{data.name}</p>
            </div>
        )
    }
}

export default SearchBox