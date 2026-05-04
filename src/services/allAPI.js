import axios from "axios";

const serverURL = "http://localhost:3000"

//get all users api : called by Dashboard component when it opens
export const getAllUsersAPI = async ()=>{
    return await axios.get(`${serverURL}/users`)
}

//add users api : called by Manage component when add btn clicked
export const addUsersAPI = async (userData)=>{
    return await axios.post(`${serverURL}/add`,userData)
}

//edit users api : called by Manage component when edit btn clicked
export const editUsersAPI = async (userID,userData)=>{
    return await axios.put(`${serverURL}/users/${userID}`,userData)
}

//delete users api : called by Dashboard component when delete btn clicked
export const deleteUsersAPI = async (userID)=>{
    return await axios.delete(`${serverURL}/users/${userID}`)
}