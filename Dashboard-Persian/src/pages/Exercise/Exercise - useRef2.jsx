import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";

export default function Exercise() {
  
    const [title, setTitle] = useState('')
    // const [rendersCount, setRendersCount] = useState(1)
    const rendersCount = useRef(1)


    
    useEffect(()=>{
      rendersCount.current = rendersCount.current+1
      // setRendersCount(prevCount => prevCount + 1)
    })

  return (
    <div className="exersice">

      <input type="text"
      value={title}
      onChange={e=> setTitle(e.target.value)}
      />  
      <h3>input value = {title}</h3>
      <h3>Render Counts: {rendersCount.current}</h3>
    </div>
  );
}
