import React, { useEffect, useState } from 'react'
import './Users.css'
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import DetailsModal from "./../DetailsModal/DetailsModal";
import { AiOutlineDollarCircle } from "react-icons/ai";



export default function Users() {
  const [users, setUsers] = useState([])
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [mainUserID, setMainUserID] = useState(null) 
  const [mainUserInfos, setMainUserInfos] = useState([])

  const [userNewFirsname, setUserNewFirsname] = useState('')
  const [userNewLastname, setUserNewLastname] = useState('')
  const [userNewUsername, setUserNewUsername] = useState('')
  const [userNewPassword, setUserNewPassword] = useState('')
  const [userNewPhone, setUserNewPhone] = useState('')
  const [userNewCity, setUserNewCity] = useState('')
  const [userNewEmail, setUserNewEmail] = useState('')
  const [userNewAddress, setUserNewAddress] = useState('')
  const [userNewScore, setUserNewScore] = useState('')
  const [userNewBuy, setUserNewBuy] = useState('')

  useEffect(()=>{
    getAllUsers()
  },[])

  function getAllUsers(){
    fetch(`http://localhost:8000/api/users`)
    .then(res=> res.json())
    .then(users =>{
      console.log(users);
      setUsers(users)
    })
  }
  
  const closeDeleteModal = ()=> setIsShowDeleteModal(false)
  const closeEditModal = ()=> setIsShowEditModal(false)
  const closeDetailsModal = ()=> setIsShowDetailsModal(false)


  const removeUser = ()=>{
    console.log('کاربر ریمو شد');
    fetch(`http://localhost:8000/api/users/${mainUserID}`,{
      method: 'DELETE'
    }).then(res => res.json())
    .then(result =>{
      console.log(result);
      setIsShowDeleteModal(false)

    })
  }
  
  const updateUser = (event)=> {
    event.preventDefault()
    console.log('user updated');

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
      buy: userNewBuy,
    }

    fetch(`http://localhost:8000/api/users/${mainUserID}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userNewInfos)
    }).then(res => res.json())
    .then(result =>{
      console.log(result);
      setIsShowEditModal(false)
      getAllUsers()
    })

  }

  return (

    <div className='cms-main'>
      <h1 className='cms-title'>لیست کاربران</h1>
      {users.length ? (<table className='cms-table'>
      <thead>
        <tr>
          <th>نام و نام خانوادگی</th>
          <th>نام کاربری</th>
          <th>رمز عبور</th>
          <th>شماره تماس</th>
          <th>ایمیل</th>
        </tr>
      </thead>
      
      <tbody>
      {users.map(user =>(
        <tr key={user.id}>
        <td>{user.firsname} {user.lastname}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={()=> {
            setIsShowDeleteModal(true)
            setMainUserID(user.id)
          }}>حذف</button>
          <button onClick={()=>{
            setMainUserInfos(user)
            setIsShowDetailsModal(true)
          }}>نمایش جزئیات</button>
          <button onClick={()=> {
            setIsShowEditModal(true)
            setMainUserID(user.id)
            setUserNewFirsname(user.firsname)
            setUserNewLastname(user.lastname)
            setUserNewUsername(user.username)
            setUserNewPassword(user.password)
            setUserNewPhone(user.phone)
            setUserNewCity(user.city)
            setUserNewEmail(user.email)
            setUserNewAddress(user.address)
            setUserNewScore(user.score)
            setUserNewBuy(user.buy)
          }}>ویرایش</button>
        </td>
      </tr>
      ))}
      </tbody>
    </table>) : (
        <Errorbox msg="هیچ کاربری یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
        title='آیاد از حذف اطمینان دارید؟'
        cancelAction={closeDeleteModal}
        submitAction={removeUser}
        >
        </DeleteModal>
      )}

        {isShowEditModal && (
          <EditModal
          onClose={closeEditModal}
          onSubmit={updateUser}
          >
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewFirsname} onChange={(event)=> setUserNewFirsname(event.target.value)} placeholder='نام جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewLastname} onChange={(event)=> setUserNewLastname(event.target.value)} placeholder='نام خانوادگی جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewUsername} onChange={(event)=> setUserNewUsername(event.target.value)} placeholder='نام کاربری جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewPassword} onChange={(event)=> setUserNewPassword(event.target.value)} placeholder='رمز عبور جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewPhone} onChange={(event)=> setUserNewPhone(event.target.value)} placeholder='شماره تماس جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewCity} onChange={(event)=> setUserNewCity(event.target.value)} placeholder='شهر جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewEmail} onChange={(event)=> setUserNewEmail(event.target.value)} placeholder='ایمیل جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <textarea type="text" className='edit-user-info-input' value={userNewAddress} onChange={(event)=> setUserNewAddress(event.target.value)} placeholder='آدرس جدید را وارد کنید'></textarea>
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewScore} onChange={(event)=> setUserNewScore(event.target.value)} placeholder='مقدار جدید را وارد کنید' />
            </div>
            {/* child */}
            <div className='edit-user-info-input-group'>
                <span>
                  <AiOutlineDollarCircle />
                </span>
                <input type="text" className='edit-user-info-input' value={userNewBuy} onChange={(event)=> setUserNewBuy(event.target.value)} placeholder='مقدار جدید را وارد کنید' />
            </div>
          </EditModal>
        )}

        {isShowDetailsModal && (
          <DetailsModal
          onHide={closeDetailsModal}
          >
            <table className="cms-table">
          <thead>
            <tr>
              <th>شهر کاربر</th>
              <th>آدرس کاربر</th>
              <th>امتیاز کاربر</th>
              <th>میزان خرید</th>
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
