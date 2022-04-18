import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.qrserver.com/v1/',
});

export default api;