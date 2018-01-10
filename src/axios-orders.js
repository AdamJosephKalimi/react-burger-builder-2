import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-bf99e.firebaseio.com/'
});

export default instance;
