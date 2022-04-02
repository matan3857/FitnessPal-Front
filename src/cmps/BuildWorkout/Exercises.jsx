import React, { useState } from 'react'
import { ExercisesPreview } from "./ExercisesPreview"
import { Pagination } from './Pagination'

export function Exercises(props) {
    const { currExercises, exerciseType, onAddExerciseToWorkout, onShowExerciseDetails } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(4);

    // Get current exercises
    const indexOfLastEx = currentPage * exercisesPerPage;
    const indexOfFirstEx = indexOfLastEx - exercisesPerPage;
    const exercisesToShow = currExercises.slice(indexOfFirstEx, indexOfLastEx);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className="exercise-list flex">
                {exercisesToShow &&
                    exercisesToShow.map((exercise, idx) => (
                        <ExercisesPreview
                            key={idx}
                            exercise={exercise}
                            exerciseType={exerciseType}
                            onAddExerciseToWorkout={onAddExerciseToWorkout}
                            onShowExerciseDetails={onShowExerciseDetails}
                        />
                    ))}
            </div>
            <Pagination
                exercisesPerPage={exercisesPerPage}
                totalExercises={currExercises.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </>
    );
}
