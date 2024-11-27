import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VUE_APP_API_URI,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 150000
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    async function (response) {
        return response;
    },
    async function (error) {
        const {
            response: { status }
        } = error;

        if (status === 403) {
            // TBD
        }

        return Promise.reject(error);
    }
);

export default instance;