import axios from 'axios';

const makeupApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
// TODO: Interceptores
export { makeupApi };