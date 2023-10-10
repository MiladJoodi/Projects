import React from 'react'
import { useState } from 'react'
import CourseHoc from '../../../components/HOCs/courseHoc'

function Reactjs({title, increasePrice,price}) {


  return (
    <div>
        <h3>Course Title: {title}</h3>
        <button onClick={increasePrice}>Increase course price (Price:{price})</button>
    </div>
    
  )
}
export default CourseHoc(Reactjs, 'Reactjs', 2_000_000)