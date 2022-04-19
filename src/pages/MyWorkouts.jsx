import React, { useState } from 'react';
import { connect } from "react-redux";
import { ExerciseDetails } from '../cmps/BuildWorkout/ExerciseDetails'
import { onUpdate } from "../store/user.actions";
import { MyWorkoutPreview } from "../cmps/MyWorkouts/MyWorkoutPreview";
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';
import hero from '../assets/img/hero-my-workouts.png';
import Swal from 'sweetalert2';

function _MyWorkouts(props) {
    const { user, onUpdate } = props
    const [selectedOption, setSelectedOption] = useState(null);
    const [isExerciseDetails, setIsExerciseDetails] = useState(false);
    const [currExercise, setCurrExercise] = useState(null);

    if (!user) return (<Redirect to={'/'} />)

    const options = user.workouts.map((workout, idx) => {
        return { value: idx, label: workout.workoutTitle }
    })

    const onShowExerciseDetails = (exercise) => {
        setCurrExercise(exercise)
        setIsExerciseDetails(true)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const onHideDetails = () => {
        setIsExerciseDetails(false)
        setCurrExercise(null)
    }

    const onDeleteMsg = () => {
        Swal.fire({
            title: 'Are you sure you want to delete workout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                user.workouts.splice(selectedOption.value, 1)
                onUpdate(user)
                setSelectedOption(null)
                Swal.fire(
                    'Deleted!',
                    'Your workout has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <section className='my-workouts margin-top' style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%' }}>
            {user.workouts.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className='my-select'
                />
                :
                <p className='fs30'>You dont have workouts yet..</p>
            }
            {selectedOption &&
                <>
                    {isExerciseDetails && <ExerciseDetails exercise={currExercise} onAddExerciseToWorkout={null} onBackToAll={null} onHideDetails={onHideDetails} isEditWorkout={false} />}
                    <div className='my-workout-header'>
                        <>
                            <h1>{user.workouts[selectedOption.value].workoutTitle}</h1>
                            <div className='my-workout-btns'>
                                <Link to={{ pathname: '/buildWorkout', workoutToEdit: user.workouts[selectedOption.value].ex }} >
                                    <button className='light-btn'>Edit Workout</button>
                                </Link>
                                <button onClick={() => { onDeleteMsg() }} className='light-btn'>Delete Workout</button>
                            </div>
                            <Link to={{
                                pathname: `/startWorkout/${selectedOption.value}`,
                                workoutToDo: user.workouts[selectedOption.value]
                            }}>
                                <button className='primary-btn'>Start Workout</button>
                            </Link>
                        </>
                    </div>
                    <div className='exercise-list'>
                        {
                            user.workouts[selectedOption.value].ex.map((exercise, idx) => (
                                <MyWorkoutPreview
                                    exercise={exercise}
                                    key={idx}
                                    onShowExerciseDetails={onShowExerciseDetails}
                                />
                            ))}
                    </div>
                </>
            }
        </section >
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

const mapDispatchToProps = {
    onUpdate
}

export const MyWorkouts = connect(mapStateToProps, mapDispatchToProps)(_MyWorkouts);