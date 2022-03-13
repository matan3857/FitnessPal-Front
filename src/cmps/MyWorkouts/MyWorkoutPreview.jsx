import React from 'react';
import { LoaderSpinner } from '../LoaderSpinner'

export function MyWorkoutPreview(props) {
    const { exercise, onShowExerciseDetails } = props
    if (!exercise) return <LoaderSpinner />
    return (
        <div className="exercise-preview">
            <div className='exercise-preview-info'>
                <h2>{exercise.title}</h2>
                <span>Sets: {exercise.sets}</span>
                <span>Reps: {exercise.reps}</span>
            </div>

            <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} alt="exercise"/>

            <div className="exercise-btns flex column">
                <button className="exercise-btn" onClick={() => { onShowExerciseDetails(exercise) }}>More Details...</button>
            </div>
        </div>
    )
}