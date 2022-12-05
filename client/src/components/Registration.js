import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Registration = () => {
  
  const navigate = useNavigate()

  // Separate state needed for the two forms
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    const registrationHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register",{
            username,
            email,
            password,
            confirmPassword
        },{withCredentials:true, credentials:'include'})
        .then((res) => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <h2>Register</h2>
        <form className='col-6 mx-auto mt-3' onSubmit={registrationHandler}>
            <label>Username:</label>
            <input type='text' className='form-control' onChange={(e) => setUsername(e.target.value)}></input>
            <label>Email:</label>
            <input type='text' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type='text' className='form-control' onChange={(e) => setPassword(e.target.value)}></input>
            <label>Confirm Password:</label>
            <input type='text' className='form-control' onChange={(e) => setConfirmPassword(e.target.value)}></input>
            <button className='btn btn-primary mt-3'>Register</button>
        </form>
    </div>
  )
}

export default Registration