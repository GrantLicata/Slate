import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Welcome = () => {
  return (
    <div className='container bg-secondary bg-opacity-25 rounded p-4 mt-5' style={{width:"400px"}}>
        <h1 className='text-center'>Welcome to Scribe</h1>
        <div className='mx-auto d-flex flex-column'>
            <button className='btn btn-primary mt-3'>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
            </button>
            <button className='btn btn-primary mt-3'>
                <NavLink to='/register' className='nav-link'>Register</NavLink>
            </button>
        </div>
    </div>
  )
}

export default Welcome