import React, { useState } from "react";
import "./ToggleNoteList.css";
import Toggle from "../../components/HOCs/Toggle";

function ToggleNoteList({ isShow, toggleHandler }) {
    
  return (
    <div>
      <button onClick={toggleHandler} className="btn btn-primary mt-5">
        {isShow ? "-" : "+"}
      </button>

      {isShow && (
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="Add New Note"></label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-primary mt-3">Add to list</button>
        </form>
      )}
    </div>
  );
}

export default Toggle(ToggleNoteList)
