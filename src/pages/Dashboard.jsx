import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
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
            <tr>
              <td>1</td>
              <td>username</td>
              <td>email</td>
              <td>salary</td>
              <td>
                <div className="d-flex">
                  <Link to={'/id/edit'} className='btn text-warning'> <i className='fa-solid fa-edit'></i> </Link>
                  <button className="btn text-danger"> <i className='fa-solid fa-trash'></i> </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard