import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";

export default function Exercise() {
  const [usernameValue, usernameBinding, usernameReset] = useInput("");
  const [passwordValue, passwordBinding, passwordReset] = useInput("");

  const submitHandler = (event)=>{
    event.preventDefault()
    alert('welcome')
    usernameReset()
    passwordReset()
  }

  return (
    <div className="exersice">
      <form onSubmit={submitHandler}>
        username:
        <input
          {...usernameBinding}
        />
        password:
        <input
          {...passwordBinding}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
