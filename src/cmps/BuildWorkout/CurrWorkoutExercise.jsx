import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function CurrWorkoutExercise(props) {

    const { exercise, onRemoveExercise, onChangeExercisePos } = props
    if (!exercise) return <div>Loading...</div>
    return (
        <div className="curr-workout-exercise flex space-between">
            <div className="curr-workout-img">
                <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} />
            </div>
            <div className="curr-workout-content flex column">
                <h2>{exercise.title}</h2>
                <h2>Type: {exercise.type}</h2>
                <h3><span className="content-title">Sets: </span>{exercise.sets}</h3>
                <h3><span className="content-title">Reps: </span>{exercise.reps}</h3>
            </div>
            <div className="curr-workout-btns">
                <button onClick={() => { onRemoveExercise(exercise.id) }}>Remove</button>
                <button onClick={() => { onChangeExercisePos(exercise.id,1) }}>Up</button>
                <button onClick={() => { onChangeExercisePos(exercise.id,0) }}>Down</button>
            </div>

        </div>
    )
}