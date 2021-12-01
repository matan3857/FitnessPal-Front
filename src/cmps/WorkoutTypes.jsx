import React, { Component } from 'react';
import { connect } from "react-redux";
import { WorkoutTypePreview } from './WorkoutTypePreview';

export class _WorkoutTypes extends Component {
    state = {
    }

    render() {
        console.log('exercise:', this.props.exercises)
        return (
            <>{
                this.props.exercises.map((exercise, idx) => (
                    <WorkoutTypePreview
                        exerciseType={exercise.type}
                        key={idx}
                    />
                ))}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const WorkoutTypes = connect(mapStateToProps)(_WorkoutTypes);