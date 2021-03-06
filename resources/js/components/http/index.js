import axios from "axios";

const $host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
//    for dev
    baseURL: 'http://127.0.0.1:8000/'
});

const $authHost = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'http://127.0.0.1:8000/'
});

const authInterceptor = config => {
    config.headers.authorization = `${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}
