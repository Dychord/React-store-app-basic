import axios from 'axios';

export const axiosInstanceLocal = axios.create({
    baseURL: 'http://localhost:3000/api/products/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
