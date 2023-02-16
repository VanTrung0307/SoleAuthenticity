import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://localhost:44310/api',
    headers: {
      'Content-Type': 'application/json',
    },
});
