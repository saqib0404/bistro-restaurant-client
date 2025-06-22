import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdminCheck from '../hooks/useAdminCheck';

const AdminRoute = ({ children }) => {
    const { user, userLoading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdminCheck()
    const location = useLocation();

    if (userLoading || isAdminLoading) {
        return <div className='flex items-center justify-center min-h-[80vh]'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user && isAdmin) return children

    return <Navigate state={location?.pathname} to='/authentication/login' replace />

}

export default AdminRoute