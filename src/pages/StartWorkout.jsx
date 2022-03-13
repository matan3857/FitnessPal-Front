import React, { useState } from 'react';
import { connect } from "react-redux";
import { Timer } from '../cmps/StartWorkout/Timer'
import { LoaderSpinner } from '../cmps/LoaderSpinner'



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

    const [setsCount, setSetsCount] = useState(0);
    const [currExerciseIdx, setCurrExerciseIdx] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const exercise = workoutToDo.ex[currExerciseIdx]
    console.log('Exercise', exercise)

    const onToggleExercise = (isNext) => {

        if (isNext) {
            if (currExerciseIdx + 1 > workoutToDo.ex.length - 1) return
            setCurrExerciseIdx(currExerciseIdx + 1)
            setLoaded(false)
        }
        else {
            if (currExerciseIdx - 1 < 0) return
            setCurrExerciseIdx(currExerciseIdx - 1)
            setLoaded(false)
        }
    }

    return (
        <div className="start-workout margin-top">
            <h1>Starting workout: {workoutToDo.workoutTitle}</h1>
            <Timer />
            {exercise ?
                <div className='start-workout-exercises'>
                    <button onClick={() => { onToggleExercise(0) }}>Prev Exercise</button>
                    <button onClick={() => { onToggleExercise(1) }}>Next Exercise</button>

                    <div className='exercise-info'>
                        <h2>Now doing: {exercise.title}</h2>
                        <div
                            className='imgs-container flex justify-center'
                            style={{ display: loaded ? 'block' : 'none' }}
                            onLoad={() => setLoaded(true)}
                        >
                            <img src={require(`../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} alt="exercise_1" />
                            <img src={require(`../assets/img/${exercise.type}/${exercise.title}/${exercise.img2}.png`).default} alt="exercise_2" />
                        </div>
                        {!loaded && <LoaderSpinner /> }
                    </div>
                </div>
                :
                <LoaderSpinner />
            }

        </div>
    )
}


function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

export const StartWorkout = connect(mapStateToProps, null)(_StartWorkout);