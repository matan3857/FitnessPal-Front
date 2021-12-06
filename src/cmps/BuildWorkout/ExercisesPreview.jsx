import React from 'react';
import { connect } from "react-redux";

export function _ExercisesPreview(props) {
  const { exercise, exerciseType, onAddExerciseToWorkout, user } = props
  if (!exercise) return <div>Loading...</div>
  return (
    <div className="exercise-preview">
      <h1>{exercise.title}</h1>
      {exercise.desc.length > 60 ? <h3>{`${exercise.desc.slice(0, 60)}...`}</h3> : <h3>{exercise.desc}</h3>}
      <img src={require(`../../assets/img/${exerciseType}/${exercise.title}/${exercise.img1}.png`).default} />

      <div className="exercise-btns flex column">
        <button className="exercise-btn" onClick={() => { onAddExerciseToWorkout(exercise) }}>Add to Workout list</button>
        <button className="exercise-btn">More Details...</button>
        {user.isAdmin && <button className="exercise-btn">Edit</button>}
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    user: state.userModule.user
  };
}

export const ExercisesPreview = connect(mapStateToProps)(_ExercisesPreview);
