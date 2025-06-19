import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` }
})

const useAxiosSecure = () => {
    axios.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosSecure
}

export default useAxiosSecure