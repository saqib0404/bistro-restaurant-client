import axios from 'axios'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` }
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { userSignOut } = useContext(AuthContext)

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });

        const responseInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, async (error) => {
            const status = error.response?.status;
            if (status === 401 || status === 403) {
                await userSignOut();
                navigate("/authentication/login");
            }
            return Promise.reject(error);
        });
        // Cleanup function
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [userSignOut, navigate]);
    return axiosSecure
}

export default useAxiosSecure