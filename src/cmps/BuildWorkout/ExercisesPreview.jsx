import React, { useState } from 'react';
import { connect } from "react-redux";
import { LoaderSpinner } from '../LoaderSpinner'
import noImg from '../../assets/img/no-img.svg'

export function _ExercisesPreview(props) {
  const { exercise, onAddExerciseToWorkout, onShowExerciseDetails, user } = props
  const [loaded, setLoaded] = useState(false);

  if (!exercise) return <LoaderSpinner />
  
  return (
    <div className="exercise-preview">
      <h1>{exercise.title}</h1>
      {exercise.desc.length > 60 ? <h3>{`${exercise.desc.slice(0, 60)}...`}</h3> : <h3>{exercise.desc}</h3>}
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
        src={`${exercise.gif}`} alt="exercise"
      // src={noImg} alt="exercise"
      />
      {!loaded && <LoaderSpinner />}

      <div className="exercise-btns flex column">
        <button className="exercise-btn" onClick={() => { onAddExerciseToWorkout(exercise) }}>Add to Workout list</button>
        <button className="exercise-btn" onClick={() => { onShowExerciseDetails(exercise) }}>More Details...</button>
        {user && user.isAdmin && <button onClick={() => { onShowExerciseDetails(exercise, true) }} className="exercise-btn">Edit</button>}
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    user: state.userModule.loggedinUser
  };
}

export const ExercisesPreview = connect(mapStateToProps)(_ExercisesPreview);
