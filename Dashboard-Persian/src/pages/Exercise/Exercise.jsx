import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
// import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import Javascript from './Courses/Javascript'
import Reactjs from './Courses/Reactjs'

export default function Exercise() {
  


  return (
    <div className="exersice">
      <Javascript />
      <Reactjs />
    </div>
  )
}
