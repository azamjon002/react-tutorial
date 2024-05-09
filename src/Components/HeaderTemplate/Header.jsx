import { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../../ThemeContext'

import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { TbMessages } from 'react-icons/tb'
import { IoAnalytics } from 'react-icons/io5'
import { HiOutlineMoon, HiOutlineLogout } from 'react-icons/hi'
import { RiSettingsLine } from 'react-icons/ri'


const Header = () => {
    const {DarkTheme, setDarkTheme} = useContext(ThemeContext)

    function changeTheme(){
        setDarkTheme(!DarkTheme);
    }

    return (
    <header className={`${DarkTheme && 'dark'}`}>
        <div className='search-bar'>
            <input type="text" placeholder='search...' />
            <BiSearch className='icon' />
        </div>
        <div className='tools'>
            <AiOutlineUser className='icon'/>
            <TbMessages className='icon'/>
            <IoAnalytics className='icon'/>

            <div className="divider"></div>

            <HiOutlineMoon className='icon' onClick={changeTheme}/>
            <RiSettingsLine className='icon'/>
            <HiOutlineLogout className='icon'/>

            <div className="divider"></div>

            <div className="user">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user-img" className='profile-img' />
            </div>
        </div>
    </header>
    )
}

export default Header