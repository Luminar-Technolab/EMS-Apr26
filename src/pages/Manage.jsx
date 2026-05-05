import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { addUsersAPI, editUsersAPI, viewUserAPI } from '../services/allAPI';

function Manage() {
  // hooks : name will starts with 'use' keyword
  const {id} = useParams()
  // console.log(id);
  //useState
  const [userData,setUserData] = useState({
    username:"",email:"",salary:""
  })
  const navigate = useNavigate()

  console.log(userData);

  useEffect(()=>{
    id && getUser()
  },[])

  const addUser = async ()=>{
    const {username,email,salary} = userData
    if(username && email && salary){
      try{
        const result = await addUsersAPI(userData)
         console.log(result);
         alert("User added successfully!!!")
        navigate('/admin')
      }catch(err){
        console.log(err);
        if(err.response.status==409){
          alert(err.response.data);
        }
        console.log("Something went wrong...");        
      }
    }else{
       alert("Please fill the form completely!!!")
    }
  }
  
  const editUser = async ()=>{
    const {username,email,salary} = userData
    if(username && email && salary){
      try{
        const result = await editUsersAPI(id,userData)
         console.log(result);
         alert("User updated successfully!!!")
        navigate('/admin')
      }catch(err){
        console.log(err);
        console.log("Something went wrong...");        
      }
    }else{
       alert("Please fill the form completely!!!")
    }
  }

  const getUser = async ()=>{
    try{
      const result = await viewUserAPI(id)
      setUserData(result.data)

    }catch(err){
      console.log(err);      
    }
  }

  return (
    <div className='container text-center w-50 my-5'>
      <h1 className="text-center">{ id ? "Edit " : "Add " } User </h1>
      <div className="my-5 border  rounded p-5 ">
        <div className="mb-3">
          <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="Username" />
        </div>
        <div className="mb-3">
          <Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <Form.Control value={userData.salary} onChange={e=>setUserData({...userData,salary:e.target.value})} type="text" placeholder="Salary" />
        </div>
        <div className="mt-5">
          {
            id ?
            <button onClick={editUser} className="btn btn-info"> EDIT USER</button>
            :
            <button onClick={addUser} className="btn btn-info">ADD  USER</button>
          }
          <button className="btn btn-warning ms-5">RESET</button>
        </div>
      </div>
    </div>
  )
}

export default Manage