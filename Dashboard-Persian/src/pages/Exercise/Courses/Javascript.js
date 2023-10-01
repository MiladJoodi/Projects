import React from 'react'
import { useState } from 'react'
import CourseHoc from '../../../components/HOCs/courseHoc'

function Javascript({title, increasePrice,price}) {

  return (
    <div>
        <h3>Course Title: {title}</h3>
        <button onClick={increasePrice}>Increase course price (Price= {price})</button>
    </div>
    
  )
}
export default CourseHoc(Javascript, 'javascript expert', 2_200_000)
