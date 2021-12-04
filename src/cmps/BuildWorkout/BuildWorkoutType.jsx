import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Exercises } from "./Exercises";

export class _BuildWorkoutType extends Component {
    state = {
    }
    exercisesToShow = () => {
        const { exerciseType } = this.props.match.params
        let currExercises = this.props.exercises.filter(exercise => exercise.type === exerciseType)
        return currExercises[0].ex
    }


    render() {
        const { exerciseType } = this.props.match.params
        return (
            <div className="build-workout-container">
                <button>Back</button>
                WorkoutType
                <Exercises currExercises={this.exercisesToShow()} exerciseType={exerciseType}/>
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