import React, { Component } from 'react';
import { connect } from "react-redux";
import { WorkoutTypePreview } from './WorkoutTypePreview';

export function _WorkoutTypes(props) {

    const { onToggleShowExercise, exercises } = props

    return (
        <>{
            exercises.map((exercise, idx) => (
                <WorkoutTypePreview
                    key={idx}
                    exerciseType={exercise.type}
                    onToggleShowExercise={onToggleShowExercise}
                />
            ))}
        </>
    )
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const WorkoutTypes = connect(mapStateToProps)(_WorkoutTypes);