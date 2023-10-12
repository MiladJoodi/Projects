import React from 'react'
import './Comments.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import DeleteModal from '../DeleteModal/DeleteModal'
    

export default function Comments() {
  return (
    <>
    <ErrorBox mgs="هیچ نظری یافت نشد" />
    <DeleteModal />
    </>
  )
}

