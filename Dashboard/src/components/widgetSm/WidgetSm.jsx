import React from "react";
import "./WidgetSm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { newMembers } from '../../datas'

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        {newMembers.map(user=>(
        <li key={user.id} className="widgetSmListItem">
          <img src={user.img} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">{user.username}</span>
            <span className="widgetSmUserTitle">{user.title}</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
