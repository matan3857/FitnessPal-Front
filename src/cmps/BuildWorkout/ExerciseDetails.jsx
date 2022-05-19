import React, { useState } from 'react';
import { saveExercise } from "../../store/exercise.actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Swal from 'sweetalert2';

export function _ExerciseDetails({ exercise, onAddExerciseToWorkout, isEditWorkout, onBackToAll, onHideDetails, saveExercise, exercises }) {
    const [desc, setDescription] = useState(exercise.desc);
    
    const onSubmit = async (ev) => {
        ev.preventDefault();
        exercise.desc = desc
        const res = await saveExercise(exercises, exercise)
        if (res) {
            Toast.fire({
                icon: 'success',
                title: 'Exercise Saved!'
            })
            onBackToAll()
        }
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return (
        <div className='exercise-details flex column align-center'>
            <div className="title-close-btn close-details flex">
                <button className="close-btn" onClick={() => onHideDetails()}>X</button>
            </div>
            <h1>{exercise.title}</h1>
            {isEditWorkout ?
                <form className="flex column edit-exercise" onSubmit={onSubmit}>
                    <textarea
                        type="txt"
                        value={desc}
                        onChange={(ev) => setDescription(ev.target.value)}
                        onBlur={(ev) => { setDescription(ev.target.value) }}
                        placeholder="Enter Description"
                    />
                </form>
                :
                <p className='display-linebreak'>{exercise.desc}</p>
            }
            <div className='imgs-container flex'>
                <img src={`${exercise.gif}`} alt="exercise"/>
            </div>
            <div className='exercise-btns flex column'>
                {!isEditWorkout && onAddExerciseToWorkout &&
                    <button className='exercise-details-btn add-exercise-btn' onClick={() => { onAddExerciseToWorkout(exercise) }}>Add to Workout list</button>
                }
                {isEditWorkout &&
                    <button className='exercise-details-btn update-exercise-btn' onClick={onSubmit}>Save Exercise!</button>
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}
const mapDispatchToProps = {
    saveExercise
}

export const ExerciseDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(_ExerciseDetails));