import React, { useEffect, useState } from 'react'
import './Users.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import {FcEditImage} from 'react-icons/fc'

    

export default function Users() {
  
  const [allUsers,setAllUsers] = useState([])
  const [isShowDeleteModal,setIsShowDeleteModal] = useState(false)
  const [isShowEditModal,setIsShowEditUserModal] = useState(false)
  const [isShowDetailsModal,setIsShowDetailsUserModal] = useState(false)
  const [mainUserID, setMainUserID] = useState(null)
  const [mainUserInfos, setMainUserInfos] = useState('')

  const [userNewFirsname, setNewFirsname] = useState('')
  const [userNewLastname, setNewLastname] = useState('')
  const [userNewUsername, setNewUsername] = useState('')
  const [userNewPassword, setNewPassword] = useState('')
  const [userNewPhone, setNewPhone] = useState('')
  const [userNewCity, setNewCity] = useState('')
  const [userNewEmail, setNewEmail] = useState('')
  const [userNewAddress, setNewAddress] = useState('')
  const [userNewScore, setNewScore] = useState('')
  const [userNewBuy, setNewBuy] = useState('')

  useEffect(()=>{
    getAllUsers()
  },[])

  function getAllUsers(){
    fetch('http://localhost:8000/api/users/')
    .then(res=> res.json())
    .then(result=> setAllUsers(result))
  }

  const closeDeleteUserModal = ()=> setIsShowDeleteModal(false)
  const closeEditUserModal = ()=> setIsShowEditUserModal(false)
  const closeDetailsUserModal = ()=> setIsShowDetailsUserModal(false)

  const deleteUser = ()=>{
    
    fetch(`http://localhost:8000/api/users/${mainUserID}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    .then(result=> {
      console.log(result);
      closeDeleteUserModal()
      getAllUsers()
    })
  }

  const updateUser = (event)=>{
    event.preventDefault()

    const userNewInfos = {
      firsname: userNewFirsname,
      lastname: userNewLastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy
    }

    fetch(`http://localhost:8000/api/users/${mainUserID}`,{
      method: 'PUT',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userNewInfos)
    }).then(res=> res.json())
    .then(result=> {
      console.log(result);
      closeEditUserModal()
      getAllUsers()
    })


  }

  return (
    <div className='cms-main'>
      <h1 className='cms-title'>کاربران</h1>
      {allUsers.length ? (
        <table className='cms-table'>
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
            </tr>
          </thead>
          
          <tbody>
            {allUsers.map(user=>(
              <tr>
              <td>{user.firsname} {user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.phone}</td>
              <td className='user-btns-container'>
                <button onClick={()=>{
                  setMainUserID(user.id)
                  setIsShowDeleteModal(true)
                }}>حذف</button>
                <button onClick={()=>{
                  setMainUserInfos(user)
                  setIsShowDetailsUserModal(true)
                }}>جزئیات</button>
                <button onClick={()=>{
                  setMainUserID(user.id)
                  setIsShowEditUserModal(true)
                  setNewFirsname(user.firsname)
                  setNewLastname(user.lastname)
                  setNewUsername(user.username)
                  setNewPassword(user.password)
                  setNewPhone(user.phone)
                  setNewCity(user.city)
                  setNewEmail(user.email)
                  setNewAddress(user.address)
                  setNewScore(user.score)
                  setNewBuy(user.buy)
                }}>ویرایش</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      ):(
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
        title='آیا از حذف کاربر اطمینان دارید؟'
        cancelAction={closeDeleteUserModal}
        submitAction={deleteUser}
        >

        </DeleteModal>
      )}

      {isShowEditModal && (
        <EditModal
        onClose={closeEditUserModal}
        onSubmit={updateUser}
        >
          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewFirsname} onChange={(event)=> setNewFirsname(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewLastname} onChange={(event)=> setNewLastname(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewUsername} onChange={(event)=> setNewUsername(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewPassword} onChange={(event)=> setNewPassword(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewPhone} onChange={(event)=> setNewPhone(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewCity} onChange={(event)=> setNewCity(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewEmail} onChange={(event)=> setNewEmail(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <textarea className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewAddress} onChange={(event)=> setNewAddress(event.target.value)}>
            </textarea>
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewScore} onChange={(event)=> setNewScore(event.target.value)} />
          </div>

          {/* item */}
          <div className='edit-user-info-input-group'>
            <span>
              <FcEditImage />
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید را وارد کنید' value={userNewBuy} onChange={(event)=> setNewBuy(event.target.value)} />
          </div>
        </EditModal>
      )}

      {isShowDetailsModal && (
        <DetailsModal
        onHide={closeDetailsUserModal}
        >
          <table className='cms-table cms-table-60'>
           <thead>
           <tr>
                <th>شهر کاربر</th>
                <th>آدرس کاربر</th>
                <th>امتیاز کاربر</th>
                <th>میزان خرید کاربر</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>{mainUserInfos.city}</td>
                <td>{mainUserInfos.address}</td>
                <td>{mainUserInfos.score}</td>
                <td>{mainUserInfos.buy}</td>
            </tr>
           </tbody>
        </table>
        </DetailsModal>
      )}
    
      
    </div>
  )
}

