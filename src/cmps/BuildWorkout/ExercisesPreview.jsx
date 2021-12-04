import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function ExercisesPreview(props) {
  const { exercise, exerciseType } = props
  console.log('exerciseType', exerciseType)
  console.log('exercise', exercise)
  if(!exercise) return <div>Loading...</div>
  return (
    // <Link to={`/BuildWorkout/${exerciseType}`} className="exercise-type">
    <div className="exercise-preview">
      <h1>{exercise.title}</h1>
      {exercise.desc.length > 60 ? <h3>{`${exercise.desc.slice(0,60)}...`}</h3> : <h3>{exercise.desc}</h3>}
      <img src={require(`../../assets/img/${exerciseType}/${exercise.title}/${exercise.img1}.png`).default} />

      <div className="exercise-btns">
        <button className="exercise-btn">Add to Workout list</button>
        <button className="exercise-btn">More Details...</button>
      </div>
    </div>
    // </Link>
  )
}
