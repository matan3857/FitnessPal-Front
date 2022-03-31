// import { httpService } from './http.service'
import Axios from 'axios';

const axios = Axios.create({
    withCredentials: true
});

export const exerciseService = {
    query,
    save
}

// async function query() {
//     const exercises = await httpService.get('exercise')
//     return exercises
// }

async function query() {
    try {
        const res = await axios.get('http://localhost:3030/api/exercise/')
        const exercises = res.data
        return exercises
    }
    catch (err) {
        console.log('server replied: cannot get exercises', err)
        throw err
    }
}

async function save(exercises,exercise) {
    try {
        const exerciseType = exercises.find(currTypes => currTypes.type === exercise.type)

        const res = await axios.put(`http://localhost:3030/api/exercise/`, exerciseType)
        const updatedExerciseType = res.data
        // const updatedUser = await httpService.put('user', user)
        return updatedExerciseType
    }
    catch (err) {
        console.log('server replied: cannot update', err)
        throw err
    }
}