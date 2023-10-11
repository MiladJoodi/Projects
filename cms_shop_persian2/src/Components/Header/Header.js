import React from 'react'
import './Header.css'
import { FcSettings, FcAdvertising, FcBullish,FcAssistant,FcMoneyTransfer  } from "react-icons/fc";
import { IoMdNotificationsOutline } from "react-icons/io";



export default function Header() {
  return (
    <div className='header'>
        <div className='admin-profile'>
            <img src="/img/steve-jobs.png" className='header-profile-img' />

            <div className='header-profile-titles'>
                <h1>استیو جابز</h1>
                <h3>برنامه نویس و مهندس ارشد</h3>
            </div>
            
        </div>
        <div className='header-left-section'>
            <div className='search-box'>
                <input type="text" placeholder='جستجو کنید...' />
                <button>جستجو</button>
            </div>

            {/* start header left icons */}
            <div className='header-icons'>
            <button className='header-left-icon'><FcSettings className='header-left-icon-item' /></button>
            <button className='header-left-icon'><FcAssistant className='header-left-icon-item' /></button>
            <button className='header-left-icon'><FcAdvertising className='header-left-icon-item' /></button>
            <button className='header-left-icon'><FcBullish className='header-left-icon-item' /></button>
            <button className='header-left-icon'><FcMoneyTransfer className='header-left-icon-item' /></button>
            </div>
            {/* end header left icons */}

        </div>
    </div>
  )
}
