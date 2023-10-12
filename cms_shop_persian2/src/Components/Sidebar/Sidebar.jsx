import React from 'react'
import './Sidebar.css'
import { FcHome, FcShop, FcComments, FcManager, FcInTransit, FcPaid } from "react-icons/fc";
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>به پنل کاربری خوش آمدید</h1>

        <ul className='sidebar-links'>
                <NavLink to="/">
                    <FcHome className='sidebar-icon'/>
                    صفحه اصلی
                </NavLink>
                <NavLink to="/products">
                    <FcShop className='sidebar-icon'/>
                    محصولات
                </NavLink>
                <NavLink to="/comments">
                <FcComments className='sidebar-icon'/>
                    نظرات
                </NavLink>
                <NavLink to="/users">
                <FcManager className='sidebar-icon'/>
                کاربران
                </NavLink>
                <NavLink to="/orders"> 
                <FcInTransit className='sidebar-icon'/>
                سفارش
                </NavLink>
                <NavLink to="offs">
                <FcPaid className='sidebar-icon'/>
                تخفیف
                </NavLink>
        </ul>
    </div>
  )
}
