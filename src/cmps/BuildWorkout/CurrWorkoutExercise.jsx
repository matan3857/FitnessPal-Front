import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { LoaderSpinner } from '../LoaderSpinner'

export function CurrWorkoutExercise(props) {
    const { exercise, onRemoveExercise, index } = props
    if (!exercise) return <LoaderSpinner />
    return (
        <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`curr-workout-exercise flex space-between ${index % 2 ? 'light-left' : 'light-right'}`}
                >
                    <div className="curr-workout-img">
                        <img src={`${exercise.gif}`} alt="exercise"/>
                        {/* <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} alt="exercise" /> */}
                    </div>
                    <div className="curr-workout-content flex column">
                        <h2>{exercise.title}</h2>
                        <h2>Type: {exercise.type}</h2>
                        <h3><span className="content-title">Sets: </span>{exercise.sets}</h3>
                        <h3><span className="content-title">Reps: </span>{exercise.reps}</h3>
                    </div>
                    <div className="curr-workout-btn flex column">
                        <button className="close-btn" onClick={() => { onRemoveExercise(exercise.id) }}>X</button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}