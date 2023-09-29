import React from 'react'
import { useState, useEffect } from 'react'

const getLocalData = (key)=>{
    let localData = localStorage.getItem(key)
    if(localData){
        return localData
      }
        return ''
}

        

export default function useLocalStorage(key, val) {
    const [value, setValue] = useState(()=>{
        return getLocalData(key)
      })
    
      useEffect(()=>{
        localStorage.setItem(key, value)
      },[value])

      return [value, setValue]
}
