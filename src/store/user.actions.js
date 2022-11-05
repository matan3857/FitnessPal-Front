import { userService } from '../services/user.service.js';

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        }
        catch (err) {
            console.log('Cannot login', err)
        }
    }
}


export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        }
        catch (err) {
            console.log('Cannot signup', err)
        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        }
        catch (err) {
            console.log('Cannot logout', err)
        }
    }
}

export function onUpdate(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.update(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        }
        catch (err) {
            console.log('Cannot update user', err)
        }
    }
}

export const loadUsers = () => {
    return async () => {
        try {
            const users = await userService.getUsers()
            return users
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        }
    }
}

export function removeUser(userId) {
    return async () => {
        try {
            const res = await userService.remove(userId)
            return res
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}