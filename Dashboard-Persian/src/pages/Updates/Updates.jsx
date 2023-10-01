import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import './Updates.css'

export default function Updates() {
  
    const [todos, setTodos] = useState([])
    // const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res=> res.json())
      .then(datas=> {
        setTodos(datas)
        // setIsPending(false)
        // console.log(datas);
      })
    })

  return (
    <div className="updates">

        <div className="updatesWrapper">
        {!todos ? "Loading..." : (
          <table className="table">
            <thead>
              <tr>
                <th className="updateTableHead">شماره</th>
                <th className="updateTableHead">ورژن</th>
                <th className="updateTableHead">ایمیل</th>
                <th className="updateTableHead">تغییرات</th>
                <th className="updateTableHead">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo=>(
                <tr className="tableRow">
                  <td style={{fontFamily: 'IranSans'}}>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.email}</td>
                  <td>{todo.body}</td>
                  <td>
                    <p className={todo.completed? 'todoSuccess' : 'todoPending'}>
                      {todo.completed? 'Complete' : 'درحال بررسی'}
                    </p>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        )}
        </div>
      
    </div>
  )
}
