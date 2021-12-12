import React, { useState, useEffect } from 'react';
import { saveExercise } from "../../store/exercise.actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export function _ExerciseDetails({ exercise, onAddExerciseToWorkout, isEditWorkout, onBackToAll, onHideDetails, saveExercise, exercises }) {

    // const [imgToShow, setImgToShow] = useState(exercise.img1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // console.log('imgToShow === exercise.img2',imgToShow===exercise.img1)
    //         console.log('imgToShow',imgToShow)
    //         if (imgToShow.charAt(imgToShow.length - 1) === '1') {
    //             console.log('if')
    //             setImgToShow(exercise.img2)
    //         }
    //         else {
    //             console.log('else')
    //             setImgToShow(exercise.img1)
    //         }

    //         // imgToShow === exercise.img1 ? setImgToShow(exercise.img2) : setImgToShow(exercise.img1) 
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);


    const [desc, setDescription] = useState(exercise.desc);

    const onSubmit = async (ev) => {
        ev.preventDefault();
        exercise.desc = desc
        saveExercise(exercises, exercise)
        onBackToAll()
    };

    return (
        <div className='exercise-details flex column align-center'>
            <div className="title-close-btn close-details flex">
                <button className="close-btn" onClick={() => onHideDetails()}>X</button>
            </div>
            <h1>{exercise.title}</h1>
            {isEditWorkout &&
                <form className="flex column edit-exercise" onSubmit={onSubmit}>
                    <textarea
                        type="txt"
                        value={desc}
                        onChange={(ev) => setDescription(ev.target.value)}
                        onBlur={(ev) => { setDescription(ev.target.value) }}
                        placeholder="Enter Description"
                    />
                </form>
            }
            {!isEditWorkout &&
                <p>{exercise.desc}</p>
            }
            <div className='imgs-container flex'>
                <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} />
                <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img2}.png`).default} />
            </div>
            <div className='exercise-btns flex column'>
                {!isEditWorkout &&
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