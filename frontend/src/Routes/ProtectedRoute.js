import React, { useContext } from 'react'
import movieContext from '../context/Movie/movieContext'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({ children }) => {
    const context = useContext(movieContext)
    const { isAuthenticated } = context;
    if (!isAuthenticated) {
        return <Navigate to='/' />
    }
    return (
        children
    )
}

export default ProtectedRoute