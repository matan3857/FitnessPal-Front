import React, { useState } from 'react';
import { connect } from "react-redux";
import { WorkoutTypes } from '../cmps/BuildWorkout/WorkoutTypes';
import { CurrWorkoutBuild } from '../cmps/BuildWorkout/CurrWorkoutBuild';
import { BuildWorkoutType } from '../cmps/BuildWorkout/BuildWorkoutType';
import { Modal } from "../cmps/Modal";
import { DragDropContext } from "react-beautiful-dnd";
import { ExerciseDetails } from '../cmps/BuildWorkout/ExerciseDetails'
import { Link } from "react-router-dom";


export function _BuildWorkout (props) {
    const [currWorkout, setCurrWorkout] = useState([]);
    const [showExercise, setShowExercise] = useState(false);
    const [exerciseType, setExerciseType] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [isExerciseDetails, setIsExerciseDetails] = useState(false);
    const [currExercise, setCurrExercise] = useState(null);
    const [isEditWorkout, setIsEditWorkout] = useState(false);

    const onRemoveExercise = (exId) => {
        let newCurrWorkout = currWorkout.filter(exercise => exercise.id !== exId)
        setCurrWorkout(newCurrWorkout)
    }

    const onAddExerciseToWorkout = (exercise) => {
        exercise['reps'] = '10'
        exercise['sets'] = '3'
        currWorkout.push(exercise)
        setCurrWorkout([...currWorkout])
    }

    const onToggleShowExercise = (exerciseType) => {
        setShowExercise(!showExercise)
        setExerciseType(exerciseType)
    }

    const onBackToAll = () => {
        setShowExercise(false)
        setIsExerciseDetails(false)
    }

    const setModalIsOpen = () => {
        setModalOpen(!modalOpen)
    }
    const onAddWorkout = () => {
        console.log('add workout')
    }

    const onShowExerciseDetails = (exercise, isEditWorkout = false) => {
        setIsExerciseDetails(true)
        setCurrExercise(exercise)
        setIsEditWorkout(isEditWorkout)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const onHideDetails = () => {
        setIsExerciseDetails(false)
    }

    const onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        const items = Array.from(currWorkout);
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCurrWorkout(items)
    }

        return (
            <section className="build-workout-container">
                <Link to="/info"><h1 className="help-build pointer">Dont know how to build? click here!</h1></Link>
                {isExerciseDetails && <ExerciseDetails exercise={currExercise} onAddExerciseToWorkout={onAddExerciseToWorkout} onBackToAll={onBackToAll} onHideDetails={onHideDetails} isEditWorkout={isEditWorkout}/>}
                {showExercise && <BuildWorkoutType exerciseType={exerciseType} onAddExerciseToWorkout={onAddExerciseToWorkout} onBackToAll={onBackToAll} onShowExerciseDetails={onShowExerciseDetails} />}
                {!showExercise &&
                    <div className="workout-types-container">
                        <WorkoutTypes onToggleShowExercise={onToggleShowExercise} />
                    </div>
                }
                <div className="curr-workout-container">
                    <h1>Your current Workout:</h1>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <CurrWorkoutBuild currWorkout={currWorkout} onRemoveExercise={onRemoveExercise} />
                    </DragDropContext>
                    <button className="openModalBtn save-workout-btn" onClick={() => { setModalOpen(true) }}>Save New Workout!</button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} onAddWorkout={onAddWorkout} />}
                </div>
            </section>
        )
    }

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkout = connect(mapStateToProps)(_BuildWorkout);