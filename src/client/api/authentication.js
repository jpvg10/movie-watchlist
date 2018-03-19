import axios from 'axios';

export function signup({ email, password }) {
    return axios.request({
        method: 'post',
        url: '/auth/signup',
        data: { 
            email: email,
            password: password 
        } 
    });
}

export function login({ email, password }) {
    return axios.request({
        method: 'post',
        url: '/auth/login',
        data: { 
            email: email,
            password: password 
        } 
    });
}
