import { exerciseService } from '../services/exercise.service';

export const loadExercises = () => {
    return async (dispatch) => {
        try {
            const exercises = await exerciseService.query()
            dispatch({
                type: "SET_EXERCISES",
                exercises,
            });
        }
        catch (err) {
            console.log('can\'t set exercises', err)
        }
    }
}

export const saveExercise = (exercises, exercise) => {
    return async (dispatch) => {
        try {
            const updatedExercises = await exerciseService.save(exercises, exercise)
            dispatch({
                type: "SAVE_EXERCISE",
                exercises,
            });
            return updatedExercises
        }
        catch (err) {
            console.log('cant save exercise', err)
            throw Error(err)
        }
    }
}