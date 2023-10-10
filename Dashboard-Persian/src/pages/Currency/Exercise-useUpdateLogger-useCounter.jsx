import React from 'react'
import { useEffect, useState } from "react";
import useUpdateLogger from './../../Hooks/useUpdateLogger'
import useCounter from './../../Hooks/useCounter'
import './Exercise.css'

export default function Exercise() {
  // const [value, setValue] = useUpdateLogger('')
  const [count,add, minus] = useCounter(0)

  return (
    <div className="exercise">

      {count}
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      
      {/* <input
        value={value}
        onChange={e => setValue(e.target.value)}
      /> */}
    </div>
  )
}
