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
        // console.log('currExercises',currExercises)
        return currExercises[0].ex
    }


    render() {
        const { exerciseType } = this.props.match.params
        // console.log('exercises',this.props.exercises)
        // console.log('exerciseType',exerciseType)
        // var currExercises = this.props.exercises.filter(exercise => exercise.type === exerciseType)
        // console.log('try',currExercises[0].ex)
        return (
            <div>
                <button>Back</button>
                WorkoutType
                <Exercises currExercises={this.exercisesToShow()} />

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