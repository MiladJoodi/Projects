import React from 'react'
import { useState } from 'react'

export default function Javascript() {

        const [title, setTitle] = useState('Javascript Expert')
        const [price, setPrice] = useState('2_000_000')

  return (
    <div>
        <h3>Course Title: {title}</h3>
        <button onClick={}>Increase course pricee</button>
    </div>
    
  )
}
