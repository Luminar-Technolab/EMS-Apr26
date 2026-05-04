import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUsersAPI, getAllUsersAPI } from '../services/allAPI';

function Dashboard() {


  const [allUsers,setAllUsers] = useState([])
  console.log(allUsers);

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async ()=>{
    try{
      const result = await getAllUsersAPI()
      // console.log(result);
      if(result.status==200){
        setAllUsers(result.data)
      }
    }catch(err){
      console.log(err);      
    }
  }

  const removeUser = async (id)=>{
    const result = await deleteUsersAPI(id)
    getUsers()
  }


  return (
    <div>
      {/* title */}
      <div className="d-flex justify-content-between m-5 align-items-center">
        {/* welcome */}
        <h1>Welcome Admin,</h1>
        {/* add user link */}
        <Link to={'/add'} className='btn btn-primary'>+ ADD USER</Link>
      </div>
      <div className="m-5">
        <h3 className='text-center text-warning'>All Users List</h3>
        <table className="table table-hover my-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Salary</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers?.map(user=>(
                <tr key={user?._id}>
                  <td>{user?._id}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user?.salary}</td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/${user?._id}/edit`} className='btn text-warning'> <i className='fa-solid fa-edit'></i> </Link>
                      <button onClick={()=>removeUser(user?._id)} className="btn text-danger"> <i className='fa-solid fa-trash'></i> </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard