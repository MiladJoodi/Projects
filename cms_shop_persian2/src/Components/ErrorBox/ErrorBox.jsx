import React from 'react';
import './ErrorBox.css';

export default function ErrorBox({mgs}) {
  return (
    <div className='empty-error'>
        <h1>{mgs}</h1>
    </div>
  )
}
