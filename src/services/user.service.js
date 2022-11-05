import { httpService } from './http.service'
import Axios from 'axios';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

const axios = Axios.create({
    withCredentials: true
});

export const userService = {
    login,
    logout,
    signup,
    update,
    getLoggedinUser,
    getUsers,
    remove,
}

async function login(userCred) {
    try {
        // const res = await axios.post('http://localhost:3030/api/auth/login', userCred)
        // const user = res.data
        const user = await httpService.post('auth/login', userCred)
        if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    }
    catch (err) {
        console.log('server replied: cannot login', err)
        throw err
    }
}

async function signup(userCred) {
    try {
        // const res = await axios.post(`http://localhost:3030/api/auth/signup`, userCred)
        // const user = res.data
        const user = await httpService.post('auth/signup', userCred)
        if (user) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        }
        return user
    }
    catch (err) {
        console.log('server replied: cannot signup', err)
        throw err
    }
}

async function logout() {
    // const res = await axios.post(`http://localhost:3030/api/auth/logout`)
    // return res.data
    const res = await httpService.post('auth/logout')
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return res
}

async function update(user) {
    try {
        // const res = await axios.put(`http://localhost:3030/api/user/`, user)
        // const updatedUser = res.data
        const updatedUser = await httpService.put('user', user)
        if (updatedUser) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(updatedUser))
        }
        return updatedUser
    }
    catch (err) {
        console.log('server replied: cannot login', err)
        throw err
    }
}

async function remove(userId) {
    try {
        const res = await httpService.delete(`user/${userId}`, userId)
        return res
    }
    catch (err) {
        console.log('server replied: cannot login', err)
        throw err
    }
}

async function getUsers() {
    try {
        const users = await httpService.get('user')
        return users
    }
    catch (err) {
        console.log('server replied: cannot get users', err)
        throw err
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || 'null')
}