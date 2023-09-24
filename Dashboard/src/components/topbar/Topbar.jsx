import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Sabzlearn ❤️</span>
        </div>
        {/* top right */}
        <div className="topRight">
          {/* top right item 1 */}
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* top right item 2 */}
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* top right item 3*/}
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          {/* profile photo */}
          <img src="images/profile.jfif" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
