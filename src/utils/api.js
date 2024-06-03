import axios from 'axios';

const API_URL = 'https://sonic-backend-mr12.onrender.com';
const AUTH_TOKEN = process.env.REACT_APP_STRIPE_DEV_APP_KEY;

const params = {
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(`${API_URL}${url}`, params);
        return data;
    } catch(err) {
        console.error(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
});
