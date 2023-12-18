import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { BrowserRouter, Router, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <Sidebar />
    </div>
  )
}

export default Home