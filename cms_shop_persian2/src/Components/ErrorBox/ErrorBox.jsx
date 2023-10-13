import React from 'react';
import './ErrorBox.css';

export default function ErrorBox({msg}) {
  return (
    <div className='empty-error'>
        <h1>{msg}</h1>
    </div>
  )
}
