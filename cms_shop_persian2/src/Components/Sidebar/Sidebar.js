import React from 'react'
import './Sidebar.css'
import { FcHome, FcShop, FcComments, FcManager, FcInTransit, FcPaid } from "react-icons/fc";


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>به پنل کاربری خوش آمدید</h1>

        <ul className='sidebar-links'>
            <li className='sidebar-link'>
                <a href="#">
                    <FcHome className='sidebar-icon'/>
                    صفحه اصلی
                </a>
            </li>
            <li className='sidebar-link active'>
                <a href="#">
                    <FcShop className='sidebar-icon'/>
                    محصولات
                </a>
            </li>
            <li className='sidebar-link'>
                <a href="#">
                <FcComments className='sidebar-icon'/>
                    نظرات
                </a>
            </li>
            <li className='sidebar-link'>
                <a href="#">
                <FcManager className='sidebar-icon'/>
                کاربران
                </a>
            </li>
            <li className='sidebar-link'>
                <a href="#"> 
                <FcInTransit className='sidebar-icon'/>
                سفارش
                </a>
            </li>
            <li className='sidebar-link'>
                <a href="#">
                <FcPaid className='sidebar-icon'/>
                تخفیف
                </a>
            </li>
        </ul>
    </div>
  )
}
