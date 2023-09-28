import React from 'react'
import { useEffect, useState } from "react";
import useUpdateLogger from './../../Hooks/useUpdateLogger'

export default function Exercise() {
    const [value, setValue] = useState('')
    
    useUpdateLogger(value)
  return (
    <div className='App'>
        <input
        type="text" />
    </div>
  )
}

