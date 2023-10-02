import React, { useState } from "react";
import "./ToggleNoteList.css";

function ToggleNoteList() {
  const [isShow, setIsShow] = useState(false);

  const toggleHandler = () => {
    console.log("toggle");
    setIsShow(prevIsShow => !prevIsShow)
  };
  return (
    <div>
      <button onClick={toggleHandler} className="btn btn-primary mt-5">
        {isShow ? '-' : '+'}
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

export default ToggleNoteList;
