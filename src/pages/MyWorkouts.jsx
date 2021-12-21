import React, { useState } from 'react';
import { connect } from "react-redux";
// import { CurrWorkoutBuild } from '../cmps/BuildWorkout/CurrWorkoutBuild';
// import { BuildWorkoutType } from '../cmps/BuildWorkout/BuildWorkoutType';
// import { ModalWorkoutName } from "../cmps/ModalWorkoutName";
// import { DragDropContext } from "react-beautiful-dnd";
// import { ExerciseDetails } from '../cmps/BuildWorkout/ExerciseDetails'
import { updateUser } from "../store/user.actions";
// import { Link } from "react-router-dom";
import Select from 'react-select';


export function _MyWorkouts({ user }) {

    const [selectedOption, setSelectedOption] = useState(null);


    console.log('user', user)

    const options = user.workouts.map(workout => {
        return { value: workout.workoutTitle, label: workout.workoutTitle }
    })

    console.log('selectedOption', selectedOption)

    return (
        <section className="my-workouts margin-top">
            <h1>My workouts</h1>
            {user.workouts.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                :
                <p>You dont have workouts yet..</p>
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