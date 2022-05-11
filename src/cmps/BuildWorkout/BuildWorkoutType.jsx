import React, { useState } from 'react'
import { connect } from "react-redux";
import { Exercises } from "./Exercises";

export function _BuildWorkoutType(props) {
    const { exerciseType, onAddExerciseToWorkout, onShowExerciseDetails, onHideDetails, exercises } = props
    const [filterByName, setFilterByName] = useState('');

    const exercisesToShow = () => {
        let currExercises = exercises.filter(exercise => exercise.type === exerciseType)
        const filteredExercises = currExercises[0].ex.filter(exercise => exercise.title.toLowerCase().includes(filterByName.toLowerCase()))
        return filteredExercises
    }

    return (
        <div className="build-workout-container">
            <div className='btn-input flex column'>
                <button onClick={() => props.onBackToAll()} className="light-btn">Back To Muscle Types</button>
                <input type="text" value={filterByName} onChange={(ev) => { setFilterByName(ev.target.value) }} placeholder='Search Exercise...' />
            </div>
            <Exercises currExercises={exercisesToShow()} onAddExerciseToWorkout={onAddExerciseToWorkout} onShowExerciseDetails={onShowExerciseDetails} onHideDetails={onHideDetails} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkoutType = connect(mapStateToProps)(_BuildWorkoutType);