import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'

export default function DeleteModal({cancelAction, submitAction}) {
  useEffect(()=>{
    const checkKey = (event)=>{
        if(event.keyCode === 27){
            cancelAction()
        }
    }
    window.addEventListener('keydown', checkKey)
    return ()=> window.removeEventListener('keydown', checkKey)
})
  return ReactDOM.createPortal (
        <div className='modal-parent active'>
            <div className='delete-modal'>
            <h1>آیا از حذف اطمینان دارین؟</h1>
            <div className='delete-modal-btns'>
                <button className='delete-btn delete-modal-accept-btn' onClick={submitAction}>بله</button>
                <button className='delete-btn delete-modal-reject-btn' onClick={cancelAction}>خیر</button>
            </div>
        </div>
        </div>, document.getElementById('modals-parent')
  )
}