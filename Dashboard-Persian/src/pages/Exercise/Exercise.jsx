import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from './../../Hooks/useFetch'
import useLocalStorage from './../../Hooks/useLocalStorage'

export default function Exercise() {

  const [value, setValue] = useLocalStorage('sabzlearn-value', '')

  return (
    <div className="exersice">
      <input type="text"
      value={value}
      onChange={(e)=> setValue(e.target.value)}
      />
    </div>
  );
}
