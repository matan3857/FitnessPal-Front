import React, { Component } from 'react';
import { CurrWorkoutExercise } from './CurrWorkoutExercise';

export class CurrWorkoutBuild extends Component {

    state = {
    }

    render() {
        const { currWorkout, onRemoveExercise, onChangeExercisePos } = this.props
        if (!currWorkout.length) return <div>Loading...</div>
        return (
            <div className="curr-workout">
                {currWorkout.map((exercise, idx) => (
                    <CurrWorkoutExercise
                        exercise={exercise}
                        onRemoveExercise={onRemoveExercise}
                        onChangeExercisePos={onChangeExercisePos}
                        key={idx}
                    />
                ))}
            </div>
        )
    }
}
