import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import './Updates.css'

export default function Updates() {
  
    const [todos, setTodos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [paginatedTodos,setPaginatedTodos] = useState([])
    // const [isPending, setIsPending] = useState(true)

    let pageSize = 10
    let pagesNumbers;

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res=> res.json())
      .then(datas=> {
        setTodos(datas);

        const pagesCount = Math.ceil(datas.length / pageSize)
        pagesNumbers = Array.from(Array(pagesCount).keys())
        console.log(pagesNumbers);
        // setIsPending(false)
        // console.log(datas);
      })
    },[])

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

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

        </div>
    </div>
  )
}
