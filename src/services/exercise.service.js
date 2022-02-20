import { httpService } from './http.service'
// import Axios from 'axios';

// const axios = Axios.create({
//     withCredentials: true
// });

export const exerciseService = {
    query,
    save
}

async function query() {
    const exercises = await httpService.get('exercise')
    return exercises
}

function save(exercises, exercise) {
    // const exercisesTypeToUpdate = exercises.find(currTypes => currTypes.type === exercise.type)
    // console.log('exercisesTypeToUpdate',exercisesTypeToUpdate.ex)
}