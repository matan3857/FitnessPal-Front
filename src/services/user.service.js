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
    getLoggedinUser,
    // getUsers,
    // getById,
    // remove,
    update,
    // changeScore
}

// window.userService = userService

// const gUsers = [
//     {
//         '_id': 'u101',
//         'fullname': 'admin',
//         'username': 'admin',
//         'password': '123',
//         'imgUrl': 'https://media-exp1.licdn.com/dms/image/C5603AQG9slGN5Fgxug/profile-displayphoto-shrink_100_100/0/1516840011642?e=1638403200&v=beta&t=wl9AzbWc9FwsXJ0xGECA_7T4xynvi067vuYs5ABVhfo',
//         'workouts': [],
//         'nutritionMenus': [],
//         'isAdmin': true
//     },
//     {
//         '_id': 'u102',
//         'fullname': 'user',
//         'username': 'user',
//         'password': '123',
//         'imgUrl': 'https://media-exp1.licdn.com/dms/image/C5603AQG9slGN5Fgxug/profile-displayphoto-shrink_100_100/0/1516840011642?e=1638403200&v=beta&t=wl9AzbWc9FwsXJ0xGECA_7T4xynvi067vuYs5ABVhfo',
//         'workouts': [],
//         'nutritionMenus': [],
//         'isAdmin': false
//     },
// ]
// localStorage.setItem(DB_KEY, JSON.stringify(gUsers))

// async function getUsers() {
//     const users = localStorage.getItem(DB_KEY) 
//     if(users?.length) return JSON.parse(users);
//     localStorage.setItem(DB_KEY,JSON.stringify(gUsers))
//     return gUsers; 
//     // return httpService.get(`user`)
// }

// async function getById(userId) {
//     const user = await storageService.get(DB_KEY, userId)
//     // const user = await httpService.get(`user/${userId}`)
//     gWatchedUser = user;
//     return user;
// }
// function remove(userId) {
//     return storageService.remove(DB_KEY, userId)
//     // return httpService.delete(`user/${userId}`)
// }

async function login(credentials) {
    try {
        const res = await axios.post('http://localhost:3030/api/auth/login', credentials)
        const user = res.data
        if (user) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        }
        return user
    }
    catch (err) {
        console.log('server replied: cannot login', err)
        throw err
    }
}

async function signup(userCred) {
    try {
        const res = await axios.post(`http://localhost:3030/api/auth/signup`, userCred)
        const user = res.data
        if (user) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        }
        return user
    }
    catch (err) {
        console.log('server replied: cannot login', err)
        throw err
    }
}

async function logout() {
    const res = await axios.post(`http://localhost:3030/api/auth/logout`)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return res.data
}

async function update(user) {
    console.log('user to update in service',user)
    try {
        // const res = await axios.put(`http://localhost:3030/api/user/${user._id}`, user)
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

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || 'null')
}