import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <span style={{backgroundColor:"grey",padding:'10px 20px',borderRadius:'12px',cursor:'pointer'}} onClick={()=>navigate('/')}> Go back to Dashboard</span>
  )
}

export default Login