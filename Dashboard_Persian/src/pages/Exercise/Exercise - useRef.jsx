import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";

export default function Exercise() {
  
  const usernameInputRef =  useRef(null)
  const titleRef = useRef()

  useEffect(()=>{
    console.log(usernameInputRef);
    usernameInputRef.current.focus()
  },[]) 

  const addNewValue = ()=>{
    usernameInputRef.current.value = 'sabzlearn'
  }

  const addNewClass = ()=>{
    usernameInputRef.current.classList.add('bg-red')
    titleRef.current.classList.add('color-blue')
  }

  return (
    <div className="exersice">
      <h3 ref={titleRef}>my title</h3>
      <input ref={usernameInputRef} type="text" placeholder="Username" />
      <button onClick={addNewValue}>Add New Value</button>
      <button onClick={addNewClass}>Add bg red</button>
    </div>
  );
}
