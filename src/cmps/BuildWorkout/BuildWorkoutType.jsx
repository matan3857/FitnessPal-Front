import React from 'react';
import { connect } from "react-redux";
import { Exercises } from "./Exercises";

export function _BuildWorkoutType(props) {
    const { exerciseType, onAddExerciseToWorkout, onShowExerciseDetails, onHideDetails, exercises } = props

    const exercisesToShow = () => {
        let currExercises = exercises.filter(exercise => exercise.type === exerciseType)
        return currExercises[0].ex
    }

    return (
        <div className="build-workout-container">
            <button onClick={() => props.onBackToAll()} className="light-btn">Back To Muscle Types</button>
            <Exercises currExercises={exercisesToShow()} onAddExerciseToWorkout={onAddExerciseToWorkout} onShowExerciseDetails={onShowExerciseDetails} onHideDetails={onHideDetails}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkoutType = connect(mapStateToProps)(_BuildWorkoutType);