import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isAuthenticate,children}) => {
  return isAuthenticate ? children : <Navigate to="/login"/>
}

export default PrivateRoute