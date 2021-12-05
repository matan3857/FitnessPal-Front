import React, { Component } from 'react';
import { connect } from "react-redux";
import { Exercises } from "./Exercises";

export class _BuildWorkoutType extends Component {
    state = {
    }
    exercisesToShow = () => {
        const { exerciseType } = this.props
        let currExercises = this.props.exercises.filter(exercise => exercise.type === exerciseType)
        return currExercises[0].ex
    }


    render() {
        const { exerciseType, onAddExerciseToWorkout } = this.props
        return (
            <div className="build-workout-container">
                <button onClick={() => this.props.onBackToAll()} className="back-to-exercises-btn">Back</button>
                <Exercises currExercises={this.exercisesToShow()} exerciseType={exerciseType} onAddExerciseToWorkout={onAddExerciseToWorkout} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkoutType = connect(mapStateToProps)(_BuildWorkoutType);