import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout())git
    
  };

  return (
    <div>
    <div className='flex justify-center items-end h-[400px] w-screen'>
      <h1 className=''>Welcome <span>{user.name}</span></h1>
    </div>
      <button className='flex w-screen justify-center items-center' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
