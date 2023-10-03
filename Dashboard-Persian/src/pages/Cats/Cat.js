import React, { useState } from "react";
import './Cat.css'

const Cat = ({ categories, filterMenus }) => {
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className="btn-container">
    {categories.map((category, index)=>(
        <button
        key={index}
        type="button"
        className={
            category === mainCategory ? 'filter-btn highlight' : 'filter-btn'
        }
        onClick={()=> {
            setMainCategory(category)
            filterMenus(category)
        }
        }
        >
            {category}
        </button>
    ))}

    </div>
  );
};

export default Cat;
