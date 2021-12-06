import React, { Component } from 'react';
import { CurrWorkoutExercise } from './CurrWorkoutExercise';

import { Droppable } from "react-beautiful-dnd";


export class CurrWorkoutBuild extends Component {

    state = {
    }

    render() {
        const { currWorkout, onRemoveExercise, onChangeExercisePos } = this.props
        if (!currWorkout.length) return <div>Loading...</div>
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
                                    onChangeExercisePos={onChangeExercisePos}
                                    index={index}
                                    id={exercise.id}
                                />
                            </div>
                        ))}
                        {provided.placeholder}
                        {/* <GroupDetails isAddNew={true} /> */}
                    </div>
                )}


                {/* <div className="curr-workout">
                    {currWorkout.map((exercise, idx) => (
                        <CurrWorkoutExercise
                            exercise={exercise}
                            onRemoveExercise={onRemoveExercise}
                            onChangeExercisePos={onChangeExercisePos}
                            idx={idx}
                            key={idx}
                        />
                    ))}
                </div> */}
            </Droppable>
        )
    }
}
