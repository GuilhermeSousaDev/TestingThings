import axios from 'axios';

const API_KEY = 'VD38ZNsAaB79JHjt15eu6wLlJUhT8vodtf668uKn';

const api = axios.create({
    baseURL: 'https://api.nasa.gov',
    params: `api_key=${API_KEY}`,
});

export default api;