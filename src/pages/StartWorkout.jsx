import React from 'react';
import { connect } from "react-redux";
import { Timer } from '../cmps/StartWorkout/Timer'


function _StartWorkout(props) {
    const { user } = props
    let { workoutToDo } = props.location
    console.log('workoutToDo', workoutToDo)

    if (!workoutToDo) {
        const link = window.location.href
        const reverseLink = link.split("").reverse().join("")
        const stopIdx = reverseLink.indexOf('/')
        const reversedIdx = reverseLink.substring(0, stopIdx)
        const currectIdx = reversedIdx.split("").reverse().join("")

        console.log('currectIdx', currectIdx)
        console.log('user', user)
        workoutToDo = user.workouts[currectIdx]
        console.log('workoutToDo', workoutToDo)
    }
    return (
        <div className="start-workout margin-top">
            <h1>Starting workout: {workoutToDo.workoutTitle}</h1>
            <Timer/>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

export const StartWorkout = connect(mapStateToProps, null)(_StartWorkout);