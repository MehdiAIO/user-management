import React from 'react'
import Users from './src/Users'
const UsersList = () => {
  return (
    <div className='container'>
        <h1 className='display-5 fw-bold text-center my-3'>Users List</h1>
        <div class="table-responsive">
            <table class="table table-secondary bordered">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Users/>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default UsersList