import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function ExercisesPreview(props) {

  const { exercise } = props
  console.log('exercise', exercise)
  return (
    // <Link to={`/BuildWorkout/${exerciseType}`} className="exercise-type">
    <div className="exercise-type">
      <h1>{exercise.title}</h1>
    </div>
    // </Link>
  )
}
