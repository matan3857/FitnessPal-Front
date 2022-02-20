import React from "react";

export function WorkoutTypePreview(props) {
    const { exerciseType, onToggleShowExercise } = props
        return (
            <div className="exercise-type" onClick={() => onToggleShowExercise(exerciseType)}>
                <div className="exercise-type">
                    <img src={require(`../../assets/img/${exerciseType}.png`).default} alt="exercise_Type"/>
                </div>
            </div>
        )
}
