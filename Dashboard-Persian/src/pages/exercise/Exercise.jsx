import React from 'react'
import { useEffect, useState } from "react";
import useUpdateLogger from './../../Hooks/useUpdateLogger'
import './Exercise.css'

export default function Exercise() {
  const [value, setValue] = useUpdateLogger('')

  
  // setValue('ssss')
  // console.log(value);
  // useUpdateLogger(value)
  useUpdateLogger('')
  return (
    <div className="exercise">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
