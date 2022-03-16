import React, { useState } from 'react';
import { connect } from "react-redux";
import { WorkoutTypePreview } from './WorkoutTypePreview';
import { LoaderSpinner } from '../LoaderSpinner'

export function _WorkoutTypes(props) {
    const { onToggleShowExercise, exercises } = props
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <div
                style={{ display: loaded ? 'contents' : 'none' }}
                onLoad={() => setLoaded(true)}
            >
                {
                    exercises.map((exercise, idx) => (
                        <WorkoutTypePreview
                            key={idx}
                            exerciseType={exercise.type}
                            onToggleShowExercise={onToggleShowExercise}
                        />
                    ))}
            </div>
            {!loaded && <LoaderSpinner />}
        </>

    )
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const WorkoutTypes = connect(mapStateToProps)(_WorkoutTypes);