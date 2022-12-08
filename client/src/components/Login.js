import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  
  const navigate = useNavigate()

  // Separate state needed for the two forms
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login",{
            email,
            password,
        },{withCredentials:true, credentials:'include'})
        .then((res) => {
            console.log(res)
            navigate('/main')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='container bg-secondary bg-opacity-25 rounded p-4 mt-5' style={{width:"400px"}}>
        <h2 className='text-center'>Login</h2>
        <form className='mx-auto d-flex flex-column' onSubmit={loginHandler}>
            <label>Email:</label>
            <input type='email' className='form-control' autoComplete='email' onChange={(e) => setEmail(e.target.value)}></input>
            <label className='mt-2'>Password:</label>
            <input type='password' className='form-control' autoComplete='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='btn btn-primary mt-3'>Login</button>
        </form>
    </div>
  )
}

export default Login