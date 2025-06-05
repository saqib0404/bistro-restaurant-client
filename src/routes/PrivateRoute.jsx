import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, userLoading } = useContext(AuthContext)
    const location = useLocation();

    if (userLoading) {
        return <div className='flex items-center justify-center min-h-[80vh]'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) return children

    return <Navigate state={location?.pathname} to='/authentication/login' replace />

}

export default PrivateRoute