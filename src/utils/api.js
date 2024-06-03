import axios from "axios";

const params = {
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        return data;
    } catch(err) {
        console.error("Error fetching data:", err);
        throw err; // Rethrow the error for the caller to handle
    }
};

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
});
