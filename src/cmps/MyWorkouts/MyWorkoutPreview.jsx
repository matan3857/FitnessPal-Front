import React from 'react';
import { LoaderSpinner } from '../LoaderSpinner'



export function MyWorkoutPreview(props) {
    const { exercise } = props
    if (!exercise) return <LoaderSpinner />
    return (
        <div className="exercise-preview">
            <div>
                <h2>{exercise.title}</h2>
                <h3>Sets: {exercise.sets}</h3>
                <h3>Reps: {exercise.reps}</h3>
            </div>

            <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} />

            <div className="exercise-btns flex column">
                {/* <button className="exercise-btn" onClick={() => { onShowExerciseDetails(exercise) }}>More Details...</button> */}
                <button className="exercise-btn">More Details...</button>
            </div>
        </div>
    )
}