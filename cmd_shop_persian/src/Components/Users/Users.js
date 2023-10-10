import React, { useEffect, useState } from 'react'
import './Users.css'
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'


export default function Users() {
  const [users, setUsers] = useState([])
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [mainUserID, setMainUserID] = useState(null)

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
          <button>نمایش جزئیات</button>
          <button>ویرایش</button>
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
</div>

  )
}
