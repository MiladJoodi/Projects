import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import ErrorBox from '../Errorbox/Errorbox'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import './Comments.css'

export default function Comments() {

  const [allComments, setAllComments] = useState([])
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
  const [mainCommentBody, setMainCommentBody] = useState('')
  const [commentID, setCommentID] = useState('')



  useEffect(()=>{
    getAllComments()
  },[])

  function getAllComments(){
    fetch('http://localhost:8000/api/comments/')
    .then(res=> res.json())
    .then(comments => setAllComments(comments)
    )
  }

  const closeDetailsModal = ()=>setIsShowDetailsModal(false)
  const closeDeleteModal = () => setIsShowDeleteModal(false)
  const closeEditModal = ()=> setIsShowEditModal(false)

  const closeAcceptModal = ()=> setIsShowAcceptModal(false)

  const acceptComment = ()=> {
    console.log('accepted');
    setIsShowAcceptModal(false)
    
  }

  const deleteComment = ()=>{
    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method: 'DELETE'
    }).then(res => res.json())
    .then(result =>{
      console.log(result);
      setIsShowDeleteModal(false)
      getAllComments()
    })
  }

  const updateComment = (event) =>{
    event.preventDefault()
    console.log('update');

    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        body: mainCommentBody
      })
    }).then(res=> res.json())
    .then(result => {
      console.log(result);
      setIsShowEditModal(false)
      getAllComments()
    })

  }

  return (
    <div className='cms-main'>

    {allComments.length>0 ? (
      <table className='cms-table'>
      <thead>
    <tr>
      <th>اسم کاربر</th>
      <th>محصول</th>
      <th>کامنت</th>
      <th>تاریخ</th>
      <th>ساعت</th>
    </tr>
      </thead>

    <tbody>
      {
        allComments.map(comment=>(
          <tr>
      <td>{comment.userID}</td>
      <td>{comment.productID}</td>
      <td><button onClick={()=>{
        setMainCommentBody(comment.body)
        setIsShowDetailsModal(true)
      }

      }>دیدن متن</button></td>
      <td>{comment.date}</td>
      <td>{comment.hour}</td>
      <td>
        <button onClick={()=>{
          setIsShowDeleteModal(true)
          setCommentID(comment.id)
        }}>حذف</button>
        <button onClick={()=>{
          setIsShowEditModal(true)
          setMainCommentBody(comment.body)
          setCommentID(comment.id)
        }}>ویرایش</button>
        <button>پاسخ</button>
        <button onClick={()=> setIsShowAcceptModal(true)}>تایید</button>
      </td>
    </tr>
        ))
      }
    
    </tbody>

  </table>
    ) : (
    <ErrorBox msg="هیچ کامنتی یافت نشد" />
    )}
    
    {isShowDetailsModal && (
      <DetailsModal
        onHide={closeDetailsModal}
      >
        <p className='text-modal'>{mainCommentBody}</p>
        <button className='text-modal-close-btn' onClick={closeDetailsModal}>بستن</button>
      </DetailsModal>
    )}

    {isShowDeleteModal && (
      <DeleteModal
      cancelAction={closeDeleteModal}
      submitAction={deleteComment}
      title='آیا از حذف اطمینان دارید؟'
      >
      </DeleteModal>
    )}
    
    {isShowEditModal &&(
      <EditModal
      onClose={closeEditModal}
      onSubmit={updateComment}
      >
        <textarea value={mainCommentBody} onChange={(event)=> setMainCommentBody(event.target.value)}>
        
        </textarea>
      </EditModal>
    )}

    {isShowAcceptModal &&(
           <DeleteModal
           cancelAction={closeAcceptModal}
           submitAction={acceptComment}
           title='آیا از تایید اطمینان دارید؟'
           >
           </DeleteModal>
    )}
    
    </div>
  )
}
