import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  
  const navigate = useNavigate()

  // Separate state needed for the two forms
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const loginHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login",{
            email,
            password,
        },{withCredentials:true, credentials:'include'})
        .then((res) => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

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
        <h2 className='mt-4'>Login</h2>
        <form className='col-6 mx-auto mt-3' onSubmit={loginHandler}>
            <label>Email:</label>
            <input type='email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type='password' className='form-control' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='btn btn-primary mt-3'>Login</button>
        </form>
    </div>
  )
}

export default Login