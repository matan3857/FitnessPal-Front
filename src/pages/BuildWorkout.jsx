import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { WorkoutTypes } from '../cmps/WorkoutTypes';
import { CurrWorkoutBuild } from '../cmps/BuildWorkout/CurrWorkoutBuild';

export class _BuildWorkout extends Component {

    state = {
        currWorkout: [{ id: '100', title: 'Squat', type: 'Legs', desc: 'bla bla bla', img1: 'squat1', img2: 'squat2', reps: '10', sets: '3' },
        { id: '200', title: 'Bench-Press', type: 'Chest', desc: 'bla bla bla', img1: 'bench-press1', img2: 'bench-press2', reps: '10', sets: '3' },
        { id: '400', title: 'Bent-Over', type: 'Back', desc: 'bla bla', img1: 'bent-over1', img2: 'bent-over2', reps: '10', sets: '3' }]
    }

    onRemoveExercise = (exId) => {
        const { currWorkout } = this.state
        let newCurrWorkout = currWorkout.filter(exercise => exercise.id !== exId)
        this.setState(prevState => ({ ...prevState, currWorkout: newCurrWorkout }))
        console.log('Remove', exId)
    }

    onChangeExercisePos = (exercise, direction, fromIndex) => {
        const { currWorkout } = this.state
        let toIdx = fromIndex + direction
        toIdx = toIdx > currWorkout.length - 1 ? currWorkout.length - 1 : toIdx < 0 ? 0 : toIdx
        currWorkout.splice(fromIndex, 1);
        currWorkout.splice(toIdx, 0, exercise)
        this.setState(prevState => ({ ...prevState, currWorkout }))
    }

    render() {
        const { currWorkout } = this.state
        console.log('exercise:', this.props.exercises)
        return (
            <section className="build-workout-container">
                <div className="workout-types-container">
                    <WorkoutTypes />
                </div>
                <div className="curr-workout-container">
                    <h2>Your current Workout:</h2>
                    <CurrWorkoutBuild currWorkout={currWorkout} onRemoveExercise={this.onRemoveExercise} onChangeExercisePos={this.onChangeExercisePos} />
                    <button>Save New Workout!</button>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkout = connect(mapStateToProps)(_BuildWorkout);