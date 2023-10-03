import React from "react";
import "./Sidebar.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/*Dashboard */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">منوی اصلی</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeOutlinedIcon className="sidebarIcon" />
                صفحه نخست
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              <Link to="/Currency" className="link">نرخ ارز</Link>
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              فروش
            </li>
          </ul>
        </div>
        {/*Quick Menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">دسترسی سریع</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                کاربران
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <PersonAddAltOutlinedIcon className="sidebarIcon" />
                افزودن کاربر
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                محصولات
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              تراکنش ها
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              نمودارها
            </li>
          </ul>
        </div>
        {/*Notifications */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">اعلان</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              پیام ها
            </li>
            <Link to="/updates" className="link">
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              تغییرات
            </li>
            </Link>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              اطلاع رسانی
            </li>
          </ul>
        </div>
        {/*staff */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">کاربری</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SchoolOutlinedIcon className="sidebarIcon" />
              آموزش
            </li>
            <li className="sidebarListItem">
              <FileDownloadOutlinedIcon className="sidebarIcon" />
              نرم افزارها
            </li>
            <li className="sidebarListItem">
              <ReportGmailerrorredOutlinedIcon className="sidebarIcon" />
              پشتیبانی
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
