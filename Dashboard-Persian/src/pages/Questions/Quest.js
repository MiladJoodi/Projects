import React from 'react'
import { useState } from 'react';

const Quest = ({id, info, title}) => {

    const [showInfo, setShowInfo] = useState(false)

    const toggleShowInfoHandler = ()=>{
      setShowInfo(prevShowInfo => !prevShowInfo)
    }

    return (
      <article className='question' onClick={toggleShowInfoHandler}>
        <header>
          <h4>{title}</h4>
          <button className='btn'>
            {showInfo ? '-' : '+'}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    );
  };

export default Quest