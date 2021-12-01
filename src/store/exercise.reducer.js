const initialState = {
    exercises: [{ type: 'Legs', ex: [{ id: '100', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] },
    { type: 'Chest', ex: [{ id: '200', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] },
    { type: 'Arm', ex: [{ id: '300', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] },
    {
        type: 'Back', ex: [{ id: '400', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' },
        { id: '401', title: 'ex2', desc: 'bla bla bla', img1: 'dsada', img2: 'dsada' }]
    },
    { type: 'Shoulder', ex: [{ id: '500', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] },
    { type: 'ABS', ex: [{ id: '600', title: 'ex1', desc: 'bla bla', img1: 'dsada', img2: 'dsada' }] }
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
