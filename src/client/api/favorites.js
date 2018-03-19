import axios from 'axios';

// Authentication module
import Auth from '../auth';

export function getFavorites() {
    return axios.request({
        method: 'get',
        url: '/api/favorites',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }
    });
}

export function addFavorite({ name }) {
    return axios.request({ 
        method: 'post',
        url: '/api/favorites',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
        data: { name } 
    });
}

export function editFavorite({ name, stars }) {
    return axios.request({
        method: 'put',
        url: '/api/favorites',
        headers: { Authorization: 'Bearer ' + Auth.getToken() },
        data: { name, stars }
    });
}

export function deleteFavorite({ name }) {
    return axios.request({
        method: 'delete',
        url: '/api/favorites',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
        data: { name } 
    });
}
