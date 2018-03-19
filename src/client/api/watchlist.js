import axios from 'axios';

// Authentication module
import Auth from '../auth';

export function getWatchlistItems() {
    return axios.request({
        method: 'get',
        url: '/api/watchlist',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }
    });
}

export function addWatchlistItem({ name }) {
    return axios.request({ 
        method: 'post',
        url: '/api/watchlist',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
        data: { name } 
    });
}

export function deleteWatchlistItem({ name }) {
    return axios.request({ 
        method: 'delete',
        url: '/api/watchlist',
        headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
        data: { name } 
    });
}
