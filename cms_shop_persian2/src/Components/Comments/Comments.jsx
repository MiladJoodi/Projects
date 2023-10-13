import React, { useEffect, useState } from "react";
import "./Comments.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { ToastContainer, toast } from 'react-toastify';
import EditModal from "../EditModal/EditModal";

export default function Comments() {

  const [allCommnets, setAllComments] =useState('')
  const [isShowDetailsModal,setIsShowDetailsModal] = useState(false)
  const [isShowDeleteModal,setIsShowDeleteModal] = useState(false)
  const [isShowEditModal,setIsShowEditModal] = useState(false)
  const [mainCommentBody,setMainCommentBody] = useState('')
  const [commentID, setCommentID] = useState(null)

  useEffect(()=>{
    getAllComments()
  },[])

  function getAllComments (){
    fetch('http://localhost:8000/api/comments')
      .then(res=> res.json())
      .then(comments=> {
        setAllComments(comments)
      })
  }

  const closeDetailsModal = ()=>{
    setIsShowDetailsModal(false)

  }

  const closeDeleteModal = ()=>{
    setIsShowDeleteModal(false)
  }

  const closeEditModal = ()=>{
    setIsShowEditModal(false)
  }

  const deleteComment = ()=>{
    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    .then(result=>{
      console.log(result);
      setIsShowDeleteModal(false)
      getAllComments()
      toast.success('حذف شد', {
        toastId: 'success1',
    })
    })
  
  }

  const updateComment = (event)=>{
    event.preventDefault()
    console.log('Edited');
    closeEditModal()
  }


  return (
    <div className="cms-main">
      {allCommnets.length ? (
        <table className="cms-table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>محصول</th>
            <th>متن کامنت</th>
            <th>تاریخ ثبت</th>
            <th>ساعت ثبت</th>
          </tr>
        </thead>
        <tbody>
        {allCommnets.map(comment=> (
          <tr key={comment.id}>
          <td>{comment.userID}</td>
          <td>{comment.userID}</td>
          <td><button onClick={()=>{
            setMainCommentBody(comment.body)
            setIsShowDetailsModal(true)
          }}>مشاهده</button></td>
          <td>{comment.date}</td>
          <td>{comment.hour}</td>
          <td className="comment-btn-group">
            <button onClick={()=>{
              setIsShowDeleteModal(true)
              setCommentID(comment.id)
            }}>حذف</button>
            <button onClick={()=>{
              setIsShowEditModal(true)
              setMainCommentBody(comment.body)
            }}>ویرایش</button>
            <button>پاسخ</button>
            <button>تایید</button>
          </td>
        </tr>
        ))}
        </tbody>
      </table>
      ):(<ErrorBox msg="هیچ نظری یافت نشد" />)}

      {isShowDetailsModal && (
        <DetailsModal
        onHide={closeDetailsModal}
        >
          <div className="comment-body-container" style={{borderRadius: '15px'}}>
            <p className="text-modal">{mainCommentBody}</p>
            <button className="text-modal-close-btn" onClick={()=>{
              closeDetailsModal()
            }}>بستن</button>
          </div>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal
        cancelAction={closeDeleteModal}
        submitAction={deleteComment}
        >

        </DeleteModal>
      )}
      <ToastContainer autoClose={2000}  rtl/>
      
      {isShowEditModal && (
        <EditModal
        onClose={setIsShowEditModal}
        onSubmit={updateComment}
        >
          <textarea style={{fontSize: '1.2rem'}} value={mainCommentBody} onChange={(event)=> setMainCommentBody(event.target.value)}>
            
          </textarea>
        </EditModal>
      )}
    </div>
  );
}
