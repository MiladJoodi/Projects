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
  const [isShowRejectModal, setIsShowRejectModal] = useState(false)
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

  const closeRejectModal = () => setIsShowRejectModal(false)
  
  const rejectComment = ()=>{
    fetch(`http://localhost:8000/api/comments/reject/${commentID}`,{
      method: 'POST'
    }).then(res => res.json())
    .then(result =>{
      console.log(result)
      setIsShowRejectModal(false)
      getAllComments()
    })


    setIsShowRejectModal(false)
  }



  const acceptComment = ()=> {
    console.log('accepted');

    fetch(`http://localhost:8000/api/comments/accept/${commentID}`,{
      method: 'POST'
    }).then(res => res.json())
    .then(result => {
      console.log(result);
      setIsShowAcceptModal(false)
      getAllComments()
    })
    

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

      <h1 className='cms-title'>لیست کامنت ها</h1>

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
        
        {comment.isAccept === 0 ? (
          <button onClick={()=> {
            setIsShowAcceptModal(true)
            setCommentID(comment.id)
        }}>تایید</button>
        ) : (
          <button onClick={()=> {
            setIsShowRejectModal(true)
            setCommentID(comment.id)
        }}>رد</button>
        )}
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

{isShowRejectModal &&(
           <DeleteModal
           cancelAction={closeRejectModal}
           submitAction={rejectComment}
           title='آیا از رد کامنت اطمینان دارید؟'
           >
           </DeleteModal>
    )}
    
    </div>
  )
}
