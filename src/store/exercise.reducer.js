const initialState = {
    exercises: []
    // filterBy: {},
}
export function exerciseReducer(state = initialState, action) {
    var newState = state
    // var exercises
    // var exercise
    switch (action.type) {
        case 'SET_EXERCISES':
            newState = { ...state, exercises: action.exercises }
            break
        case 'SAVE_EXERCISE':
            // exercises = state.exercises.map(exercise => (exercise._id === action.exercise._id) ? action.exercise : exercise)
            newState = { ...state, exercises: action.exercises }
            break
        // case 'ADD_EXERCISE':
        //     newState = { ...state, exercises: [...state.exercises, action.exercise] }
        //     break
        // case 'REMOVE_EXERCISE':
        //     // const lastRemovedExercise = state.exercises.find(exercise => exercise._id === action.exerciseId)
        //     exercises = state.exercises.filter(exercise => exercise._id !== action.exerciseId)
        //     newState = { ...state, exercises }
        //     break
        default:
    }
    return newState
}
