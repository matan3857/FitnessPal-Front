import React, { Component } from 'react';
import { connect } from "react-redux";
import { WorkoutTypes } from '../cmps/WorkoutTypes';
import { CurrWorkoutBuild } from '../cmps/BuildWorkout/CurrWorkoutBuild';
import { BuildWorkoutType } from '../cmps/BuildWorkout/BuildWorkoutType';
import { Modal } from "../cmps/Modal";
import { DragDropContext } from "react-beautiful-dnd";


export class _BuildWorkout extends Component {

    state = {
        currWorkout: [{ id: '100', title: 'Squat', type: 'Legs', desc: 'bla bla bla', img1: 'squat1', img2: 'squat2', reps: '10', sets: '3' },
        { id: '200', title: 'Bench-Press', type: 'Chest', desc: 'bla bla bla', img1: 'bench-press1', img2: 'bench-press2', reps: '10', sets: '3' },
        { id: '400', title: 'Bent-Over', type: 'Back', desc: 'bla bla', img1: 'bent-over1', img2: 'bent-over2', reps: '10', sets: '3' }],
        showExercise: false,
        exerciseType: '',
        modalOpen: false
    }

    onRemoveExercise = (exId) => {
        const { currWorkout } = this.state
        let newCurrWorkout = currWorkout.filter(exercise => exercise.id !== exId)
        this.setState(prevState => ({ ...prevState, currWorkout: newCurrWorkout }))
    }

    onAddExerciseToWorkout = (exercise) => {
        const { currWorkout } = this.state
        exercise['reps'] = '10'
        exercise['sets'] = '3'
        currWorkout.push(exercise)
        this.setState(prevState => ({ ...prevState, currWorkout }))
    }

    onToggleShowExercise = (exerciseType) => {
        this.setState(prevState => ({ ...prevState, showExercise: !this.state.showExercise, exerciseType }))
    }

    onBackToAll = () => {
        this.setState(prevState => ({ ...prevState, showExercise: false }))
    }

    setModalOpen = () => {
        this.setState(prevState => ({ ...prevState, modalOpen: !this.state.modalOpen }))

    }
    onAddWorkout = () => {
        console.log('add workout')
    }

    onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        const { currWorkout } = this.state
        const items = Array.from(currWorkout);
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        this.setState(prevState => ({ ...prevState, currWorkout: items }))
    };

    render() {
        const { currWorkout, exerciseType, showExercise, modalOpen } = this.state
        return (
            <section className="build-workout-container">
                {showExercise && <BuildWorkoutType exerciseType={exerciseType} onAddExerciseToWorkout={this.onAddExerciseToWorkout} onBackToAll={this.onBackToAll} />}
                {!showExercise &&
                    <div className="workout-types-container">
                        <WorkoutTypes onToggleShowExercise={this.onToggleShowExercise} />
                    </div>
                }
                <div className="curr-workout-container">
                    <h1>Your current Workout:</h1>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <CurrWorkoutBuild currWorkout={currWorkout} onRemoveExercise={this.onRemoveExercise} />
                    </DragDropContext>
                    <button className="openModalBtn save-workout-btn" onClick={() => { this.setModalOpen(true) }}>Save New Workout!</button>
                    {modalOpen && <Modal setOpenModal={this.setModalOpen} onAddWorkout={this.onAddWorkout} />}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkout = connect(mapStateToProps)(_BuildWorkout);