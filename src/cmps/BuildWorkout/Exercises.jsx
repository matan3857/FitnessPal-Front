import React from "react";
import { ExercisesPreview } from "./ExercisesPreview";

export function Exercises(props) {
    const { currExercises } = props;
    console.log('currExercises',currExercises)
    return (
        <div className="page-list">
            {currExercises &&
                currExercises.map((exercise, idx) => (
                    <ExercisesPreview
                        exercise={exercise}
                        key={idx}
                    />
                ))}
        </div>
    );
}
