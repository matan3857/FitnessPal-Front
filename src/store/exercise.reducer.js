const initialState = {
    exercises: []
    // filterBy: {},
}
export function exerciseReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_EXERCISES':
            newState = { ...state, exercises: action.exercises }
            break
        case 'SAVE_EXERCISE':
            // exercises = state.exercises.map(exercise => (exercise._id === action.exercise._id) ? action.exercise : exercise)
            newState = { ...state, exercises: action.exercises }
            break
        default:
    }
    return newState
}
