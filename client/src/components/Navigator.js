import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Navigator = () => {

  let activeStyle = {
    color: "cyan"
  }
  
  let inactiveStyle = {
    color: "white"
  }
  
  const navigate = useNavigate()
  
  const logout = (e) => {
    axios.get('http://localhost:8000/api/logout', {withCredentials:true})
    .then((res) => {
      console.log('User logged out')
      navigate('/login')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav ms-2">
          <a className="navbar-brand text-warning" href="/welcome"><strong>Scribe</strong></a>
          <NavLink to='/' className='nav-link' style={({ isActive }) => isActive ? activeStyle : inactiveStyle } onClick={logout} end>Logout</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigator