import { exerciseService } from '../services/exercise.service';

export const loadExercises = () => {
    return async (dispatch) => {
        try {
            const exercises = await exerciseService.query()
            dispatch({
                type: "SET_EXERCISES",
                exercises,
            });
            console.log('exercises returned',exercises)
        }
        catch (err) {
            console.log('can\'t set exercises', err)
        }
    }
}

// export const loadBoard = (boardId) => {
//     return async (dispatch) => {
//         try {
//             const board = await boardService.getById(boardId)
//             // console.log('loading board',board)
//             if(board)
//             dispatch({
//                 type: "SET_BOARD",
//                 board,
//             });

//         }
//         catch (err) {
//             console.log('cant set board', err)
//             throw Error(err)
//         }
//     }
// }

export const saveExercise = (exercises, exercise) => {
    return async (dispatch) => {
        try {
            // const updatedExercises = await exerciseService.save(exercises, exercise)
            const updatedExercises = exercises
            dispatch({
                type: "SAVE_EXERCISE",
                exercises: updatedExercises,
            });

        }
        catch (err) {
            console.log('cant save exercise', err)
            // throw Error(err)
        }
    }
}

// export const addBoard = (title = "new board", bgClr = "black", bgImg) => {
//     return async (dispatch) => {
//         const board = { title, style: { bgClr, bgImg } }
//         try {
//             const newBoard = await boardService.save(board)
//             dispatch({
//                 type: "ADD_BOARD",
//                 board: newBoard,
//             });
//             return newBoard
//         }
//         catch (err) {
//             console.log('cant add board', err)
//         }
//     }
// }

// export const removeBoard = (boardId) => {
//     return async (dispatch) => {
//         try {
//             const board = await boardService.remove(boardId)
//             dispatch({
//                 type: "REMOVE_BOARD",
//                 boardId: boardId,
//             });

//         }
//         catch (err) {
//             console.log('cant remove board', err)
//         }
//     }
// }

// export const clearBoard = () => {
//     return (dispatch) => {
//         dispatch({
//             type: "SET_BOARD",
//             board: null
//         });

//     }
// }