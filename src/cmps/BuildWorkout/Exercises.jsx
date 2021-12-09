import React from "react";
import { ExercisesPreview } from "./ExercisesPreview";

export function Exercises(props) {
    const { currExercises, exerciseType, onAddExerciseToWorkout, onShowExerciseDetails } = props;
    return (
        <div className="exercise-list flex">
            {currExercises &&
                currExercises.map((exercise, idx) => (
                    <ExercisesPreview
                        exercise={exercise}
                        exerciseType={exerciseType}
                        key={idx}
                        onAddExerciseToWorkout={onAddExerciseToWorkout}
                        onShowExerciseDetails={onShowExerciseDetails}
                    />
                ))}
        </div>
    );
}
