import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/appContext'
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext()
  if (!user) {
    return <Navigate to='/'></Navigate>
  }
  return children
}

export default PrivateRoute
