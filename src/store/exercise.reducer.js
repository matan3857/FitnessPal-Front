const initialState = {
    exercises: [{ type: 'legs', ex: [{ id: '123', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] },
                { type: 'chest', ex: [{ id: '123', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] }
                ]
    // filterBy: {},
}
export function exerciseReducer(state = initialState, action) {
    var newState = state
    // var boards
    // var board
    switch (action.type) {
        // case 'SET_BOARDS':
        //     newState = { ...state, boards: action.boards }
        //     break
        // case 'SET_BOARD':
        //     newState = { ...state, board: action.board }
        //     break
        // case 'SAVE_BOARD':
        //     boards = state.boards.map(board => (board._id === action.board._id) ? action.board : board)
        //     newState = { ...state, boards, board: { ...action.board } }
        //     break
        // case 'ADD_BOARD':
        //     newState = { ...state, boards: [...state.boards, action.board] }
        //     break
        // case 'REMOVE_BOARD':
        //     // const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
        //     boards = state.boards.filter(board => board._id !== action.boardId)
        //     newState = { ...state, boards }
        //     break
        // case 'SET_TASK_DETAILS':
        //     newState = { ...state, board: { ...state.board, currTaskDetails: { ...action.task } } }
        //     break

        // case 'TOGGLE_LABELS':
        //     newState = { ...state, areLabelsExpanded: !state.areLabelsExpanded }
        //     break

        // case 'UNDO_REMOVE_BOARD':
        //     if (state.lastRemovedBoard) {
        //         newState = { ...state, boards: [...state.boards, state.lastRemovedBoard], lastRemovedBoard: null}
        //     }
        //     break
        default:
    }
    return newState
}
