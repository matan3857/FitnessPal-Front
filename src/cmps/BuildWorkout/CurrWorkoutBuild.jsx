import React from 'react';
import { CurrWorkoutExercise } from './CurrWorkoutExercise';
import { Droppable } from "react-beautiful-dnd";

export function CurrWorkoutBuild(props) {

    const { currWorkout, onRemoveExercise } = props

    if (!currWorkout.length) return <div><h2>Your training program is currently empty..</h2></div>
    return (
        <Droppable
            droppableId={"all-groups"}
            type="group"
        >
            {(provided) => (
                <div
                    className="curr-workout"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {currWorkout.map((exercise, index) => (
                        <div key={index}> {/*Change Here to ID*/}
                            <CurrWorkoutExercise
                                exercise={exercise}
                                onRemoveExercise={onRemoveExercise}
                                index={index}
                                id={exercise.id}
                            />
                        </div>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
