import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import Axios from 'axios';
// // import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
const DB_KEY = 'user'
// var gWatchedUser = null;

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
    // update,
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

// async function update(user) {
//     await storageService.put(DB_KEY, user)
//     // user = await httpService.put(`user/${user._id}`, user)
//     // Handle case in which admin updates other user's details
//     if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
//     return user;
// }

async function login(userCred) {
    const users = await storageService.query(DB_KEY)
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)

    // const user = await httpService.post('auth/login', userCred)
    // socketService.emit('set-user-socket', user._id);
    // if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
    // const user = await storageService.post(DB_KEY, userCred)

    // const user = await httpService.post('auth/signup', userCred)
    // sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    // return user
    
    const res = await axios.post(`http://localhost:3030/api/auth/signup`, userCred)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(res.data))
    return res.data
}

async function logout() {
    const res = await axios.post(`http://localhost:3030/api/auth/logout`)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return res.data
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || 'null')
}