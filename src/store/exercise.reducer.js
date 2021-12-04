const initialState = {
    exercises: [{ type: 'Legs', ex: [ { id: '100', title: 'Squat', desc: 'bla bla bla', img1: 'squat1', img2: 'squat2' },] },
    { type: 'Chest', ex: [ { id: '200', title: 'Bench-Press', desc: 'bla bla bla', img1: 'bench-press1', img2: 'bench-press2' },] },
    { type: 'Arm', ex: [ { id: '300', title: 'Bar-Curls', desc: 'bla bla bla', img1: 'bar-curls1', img2: 'bar-curls1' },] },
    {
        type: 'Back', ex: [{ id: '400', title: 'Bent-Over', desc: 'bla bla', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '401', title: 'Bent-Over', desc: 'bla bla bla', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '402', title: 'Bent-Over', desc: 'bladsadsa', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '403', title: 'Bent-Over', desc: 'bla bdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '404', title: 'Bent-Over', desc: 'bla b das dasd asd as asdada dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '405', title: 'Bent-Over', desc: 'bla bla bla dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '406', title: 'Bent-Over', desc: 'bla bla bla dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas', img1: 'bent-over1', img2: 'bent-over2' },
        { id: '407', title: 'Bent-Over', desc: 'bla bla bla dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas dadad asdadasddaasdasd  dad asd  da das dasd  das dasdas', img1: 'bent-over1', img2: 'bent-over2' }]
    },
    { type: 'Shoulder', ex: [ { id: '500', title: 'Bent-Over', desc: 'bla bla bla', img1: 'bent-over1', img2: 'bent-over2' },] },
    { type: 'ABS', ex: [ { id: '600', title: 'Bent-Over', desc: 'bla bla bla', img1: 'bent-over1', img2: 'bent-over2' },] }
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
