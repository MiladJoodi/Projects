import React, {useEffect} from 'react'
import './EditModal.css'

export default function EditModal({children, onClose, onSubmit}) {
  useEffect(()=>{
    const checkKey = (event)=>{
        if(event.keyCode === 27){
            onClose()
        }
    }
    window.addEventListener('keydown', checkKey)
    return ()=> window.removeEventListener('keydown', checkKey)
})
  return (
    <div className='modal-parent active'>
        <form action="#" className='edit-modal-form'>
            <h1>اطلاعات جدید را وارد کنید</h1>
              {children}
            <button className='edit-form-submit' onClick={onSubmit}>ثبت اطلاعات جدید</button>
        </form>
    </div>
  )
}
