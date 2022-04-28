import React, { useState } from 'react'
import { ExercisesPreview } from "./ExercisesPreview"
import { Pagination } from './Pagination'

export function Exercises(props) {
    const { currExercises, exerciseType, onAddExerciseToWorkout, onShowExerciseDetails } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8);

    // Get current exercises
    const indexOfLastEx = currentPage * exercisesPerPage;
    const indexOfFirstEx = indexOfLastEx - exercisesPerPage;
    const exercisesToShow = currExercises.slice(indexOfFirstEx, indexOfLastEx);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const onTogglePage = (toggleDirection) => {
        if (toggleDirection) {
            if (currentPage + 1 > Math.ceil(currExercises.length / exercisesPerPage)) return
            setCurrentPage(prevPage => prevPage + 1)
        }
        else {
            if (currentPage - 1 < 1) return
            setCurrentPage(prevPage => prevPage - 1)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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
                onTogglePage={onTogglePage}
                paginate={paginate}
            />
        </>
    );
}
