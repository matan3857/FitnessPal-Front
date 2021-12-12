import { utilService } from '../services/util.service';

const initialState = {
    exercises: [{
        type: 'Legs', ex: [{ id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },
        { id: utilService.makeId(), title: 'Squat', type: 'Legs', desc: 'Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor.', img1: 'squat1', img2: 'squat2' },]
    },
    {
        type: 'Chest', ex: [{ id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },
        { id: utilService.makeId(), title: 'Bench-Press', type: 'Chest', desc: 'Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you\'re at the bottom of your move your hands are directly above your elbows, Bring the bar slowly down to your chest as you breathe in.', img1: 'bench-press1', img2: 'bench-press2' },]
    },
    {
        type: 'Arm', ex: [{ id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },
        { id: utilService.makeId(), title: 'Bar-Curls', type: 'Arm', desc: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged.', img1: 'bar-curls1', img2: 'bar-curls1' },]
    },
    {
        type: 'Back', ex: [{ id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' },
        { id: utilService.makeId(), title: 'Bent-Over', type: 'Back', desc: 'Once you have your barbell loaded, stand with your feet shoulder-width apart. Bend your knees and lean forward from the waist. Your knees should be bent, but your back stays straight, with your neck in line with your spine. Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.', img1: 'bent-over1', img2: 'bent-over2' }]
    },
    {
        type: 'Shoulder', ex: [{ id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },
        { id: utilService.makeId(), title: 'Overhead-Press', type: 'Shoulder', desc: 'Stand with the bar on your front shoulders, and your hands next to your shoulders. Press the bar over your head, until it’s balanced over your shoulders and mid-foot. Lock your elbows at the top, and shrug your shoulders to the ceiling.', img1: 'overhead-press1', img2: 'overhead-press2' },]
    },

    {
        type: 'ABS', ex: [{ id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },
        { id: utilService.makeId(), title: 'Plank', type: 'ABS', desc: 'Place forearms on the floor with elbows aligned below shoulders and arms parallel to your body at about shoulder width. If flat palms bother your wrists, clasp your hands together.', img1: 'plank', img2: 'plank' },]
    }
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
        case 'SAVE_EXERCISE':
            // boards = state.boards.map(board => (board._id === action.board._id) ? action.board : board)
            newState = { ...state, exercises: action.exercises }
            break
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
