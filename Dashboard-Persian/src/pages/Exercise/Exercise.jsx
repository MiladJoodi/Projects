import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";
import Javascript from "./Courses/Javascript";
import Reactjs from "./Courses/Reactjs";
import ToggleNoteList from "./ToggleNoteList";
import menus from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

// const allCategories = ["all", ...new Set(menus.map((menu) => menu.category))];
const allCategories = ["all", ...new Set(menus.map(menu=> menu.category))]

export default function Exercise() {
  console.log(allCategories);

  const [allMenu, setAllMenu] = useState(menus);
  const [categories, setCategories] = useState(allCategories)
  // const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category)=>{
    if(category == 'all'){
      setAllMenu(menus)
      return 
    }
    let filteredMenus = menus.filter(menu=> menu.category === category)
    setAllMenu(filteredMenus)

  }

  return (
    <div className="categories">
      <div className="categoriesWrapper">
        <section className="menu section">
          <div className="title">
            <h2>دسترسی آسان</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterMenus={filterMenus} />
          <Menu allMenus={allMenu} />
        </section>
      </div>
    </div>
  );
}
