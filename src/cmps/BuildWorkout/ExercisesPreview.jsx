import React from 'react';

export function ExercisesPreview(props) {
  const { exercise, exerciseType, onAddExerciseToWorkout } = props
  if(!exercise) return <div>Loading...</div>
  return (
    <div className="exercise-preview">
      <h1>{exercise.title}</h1>
      {exercise.desc.length > 60 ? <h3>{`${exercise.desc.slice(0,60)}...`}</h3> : <h3>{exercise.desc}</h3>}
      <img src={require(`../../assets/img/${exerciseType}/${exercise.title}/${exercise.img1}.png`).default} />

      <div className="exercise-btns">
        <button className="exercise-btn" onClick={()=>{onAddExerciseToWorkout(exercise)}}>Add to Workout list</button>
        <button className="exercise-btn">More Details...</button>
      </div>
    </div>
  )
}
