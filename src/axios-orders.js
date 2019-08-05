import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-1d633.firebaseio.com/'
});

export default instance;