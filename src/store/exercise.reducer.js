const initialState = {
    exercises: []
}
export function exerciseReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_EXERCISES':
            newState = { ...state, exercises: action.exercises }
            break
        case 'SAVE_EXERCISE':
            newState = { ...state, exercises: action.exercises }
            break
        default:
    }
    return newState
}
