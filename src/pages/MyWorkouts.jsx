import React, { useState } from 'react';
import { connect } from "react-redux";
// import { ExerciseDetails } from '../cmps/BuildWorkout/ExerciseDetails'
import { updateUser } from "../store/user.actions";
import { MyWorkoutPreview } from "../cmps/MyWorkouts/MyWorkoutPreview";
import { Link } from "react-router-dom";
import Select from 'react-select';
import hero from '../assets/img/hero-my-workouts.png';

export function _MyWorkouts({ user }) {
    const [selectedOption, setSelectedOption] = useState(null);
    // const [isExerciseDetails, setIsExerciseDetails] = useState(false);

    console.log('user', user)

    const options = user.workouts.map((workout, idx) => {
        return { value: idx, label: workout.workoutTitle }
    })

    return (
        <section className='my-workouts margin-top' style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%' }}>
            <h1>My workouts</h1>
            {user.workouts.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className='my-workouts-select'
                />
                :
                <p>You dont have workouts yet..</p>
            }
            {selectedOption &&
                <>
                    {/* {isExerciseDetails && <ExerciseDetails exercise={currExercise} onAddExerciseToWorkout={onAddExerciseToWorkout} onBackToAll={onBackToAll} onHideDetails={onHideDetails} isEditWorkout={isEditWorkout} />} */}

                    <div className='my-workout-header'>
                        <h1>{user.workouts[selectedOption.value].workoutTitle}</h1>
                        <div className='my-workout-btns'>
                            <Link to={{ pathname: '/buildWorkout', workoutToEdit: user.workouts[selectedOption.value].ex }} >
                                <button className='light-btn'>Edit Workout</button>
                            </Link>
                            <button className='light-btn'>Delete Workout</button>
                        </div>
                    </div>
                    <div className='exercise-list'>
                        {
                            user.workouts[selectedOption.value].ex.map((exercise, idx) => (
                                <MyWorkoutPreview
                                    exercise={exercise}
                                    key={idx}
                                // onShowExerciseDetails={onShowExerciseDetails}
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
    updateUser
}

export const MyWorkouts = connect(mapStateToProps, mapDispatchToProps)(_MyWorkouts);

{/* {`${workout.workoutTitle}`} */ }