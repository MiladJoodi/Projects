import React from "react";
import "./Topbar.css";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { GrShareOption } from "react-icons/gr";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* topbar-left */}
        <div className="topbarRight">
        <GrShareOption className="topbarTitleIcon" />
          <span className="topbarTitle">پنل کاربری </span>
        </div>
        {/* topbar-left */}
        <div className="topbarLeft">
          <IconButton aria-label="fingerprint" color="gray">
            <MdPowerSettingsNew className="topbarIcon" />
          </IconButton>
          <IconButton aria-label="fingerprint" color="gray">
            <span className="topbarBadge">2</span>
            <IoNotificationsOutline className="topbarIcon" />
          </IconButton>
          <IconButton aria-label="fingerprint" color="gray">
            <IoSettingsOutline className="topbarIcon" />
          </IconButton>
          <img src="/images/Steve-Jobs.jpg" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
