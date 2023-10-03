import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import Javascript from "./Courses/Javascript";
import Reactjs from "./Courses/Reactjs";
import ToggleNoteList from './ToggleNoteList'

export default function Exercise() {

  const [number, setNumber] = useState(0)
  const [divStyle, setDivStyle] = useState({})
  const sectionRef = useRef()

  useEffect(()=>{
    console.log('update');
    const randomValue = Math.floor(Math.random()*500)

    for (let i =0; i <= 100000; i++){
      if(i === 100000){
        setDivStyle({paddingTop: `${randomValue}px`})
      }
    }

  },[number])

  return (
    <div className="exersice">
      <section ref={sectionRef} style={divStyle}>
        <p>{number}</p>
        <div>
          <button onClick={()=> setNumber(prevNumber=> prevNumber - 1)}>-</button>
          <button onClick={()=> setNumber(prevNumber=> prevNumber + 1)}>+</button>
        </div>
      </section>
    </div>
  );
}
