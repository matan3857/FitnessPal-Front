import { userService } from '../services/user.service.js'


const initialState = {
    // loggedinUser: userService.getLoggedinUser(),
    loggedinUser: '',
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, loggedinUser: action.user }
            break;
        default:
    }
    switch (action.type) {
        case 'UPDATE_USER':
            newState = { ...state, loggedinUser: action.user }
            break;
        default:
    }
    // For debug:
    // window.userState = newState;
    // console.log('State:', newState);
    return newState;

}
