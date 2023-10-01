import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import "./Updates.css";
import Pagination from "@mui/material/Pagination";

export default function Updates() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // bgc
  const [paginatedTodos, setPaginatedTodos] = useState([]);
  // const [isPending, setIsPending] = useState(true)

  let pageSize = 10;
  let pagesNumbers;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas);
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - 10
        let allShownTodos = datas.slice(startIndex, endIndex)
        setPaginatedTodos(allShownTodos)
        console.log(allShownTodos);
        // console.log(pagesNumbers);
        // setIsPending(false)
        // console.log(datas);
      });
  }, []);
  const pagesCount = Math.ceil(todos.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys());

  useEffect(()=>{
    let endIndex = pageSize * currentPage
    let startIndex = endIndex - 10
    let allShownTodos = todos.slice(startIndex, endIndex)
    setPaginatedTodos(allShownTodos)
  }, [currentPage])

  const changePaginate =  (newPage) => {
     setCurrentPage(newPage);  //async
  };

  return (
    <div className="updates">
      <div className="updatesWrapper">
        {!todos ? (
          "Loading..."
        ) : (
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
              {paginatedTodos.map((todo) => (
                <tr className="tableRow" key={todo.id}>
                  <td style={{ fontFamily: "IranSans" }}>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.email}</td>
                  <td>{todo.body}</td>
                  <td>
                    <p
                      className={todo.completed ? "todoSuccess" : "todoPending"}
                    >
                      {todo.completed ? "Complete" : "درحال بررسی"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {pagesNumbers.map((pageNumber) => (
              <li class={pageNumber + 1 == currentPage? 'page-item active' : 'page-item'} key={pageNumber + 1} onClick={() => changePaginate(pageNumber + 1)}>
                <span class="page-link">{pageNumber + 1}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
