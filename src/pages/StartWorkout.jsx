import React, { useState } from 'react';
import { connect } from "react-redux";
import { Timer } from '../cmps/StartWorkout/Timer'
import { LoaderSpinner } from '../cmps/LoaderSpinner'
import { Link } from "react-router-dom";

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

        // console.log('currectIdx', currectIdx)
        // console.log('user', user)
        workoutToDo = user.workouts[currectIdx]
        // console.log('workoutToDo', workoutToDo)
    }
    const [currExerciseIdx, setCurrExerciseIdx] = useState(0);

    const exercise = workoutToDo.ex[currExerciseIdx]
    const [setsCount, setSetsCount] = useState(+exercise.sets);
    const [loaded, setLoaded] = useState(false);
    const [isInfo, setIsInfo] = useState(false);
    const [isDoneWorkout, setIsDoneWorkout] = useState(false);

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

    const onToggleInfo = () => {
        setIsInfo(prevIsInfo => !prevIsInfo)
    }

    const onNextRep = () => {
        if (setsCount - 1 === 0) {
            //Check if last exercise
            if (currExerciseIdx === workoutToDo.ex.length - 1) setIsDoneWorkout(true)
            else {
                setSetsCount(+exercise.sets)
                onToggleExercise(1)
            }
        }
        else {
            setSetsCount(prevSetsCount => prevSetsCount - 1)
        }
    }

    return (
        <div className="start-workout margin-top">
            <h1>Starting workout: {workoutToDo.workoutTitle}</h1>
            <Timer />
            {exercise ?
                <div className='start-workout-exercises'>
                    {isDoneWorkout
                        ?
                        <>
                            <p className='done-workout'>Well done, You've finished your workout!</p>
                            <Link to={{ pathname: '/menu' }} >
                                <button className='light-btn'>Back to Application</button>
                            </Link>
                        </>
                        :
                        <>
                            <div className='toggle-btns'>
                                <button className='light-btn' onClick={() => { onToggleExercise(0) }}>Previous Exercise</button>
                                <button className='light-btn' onClick={() => { onToggleExercise(1) }}>Next Exercise</button>
                            </div>

                            <div className='exercise-info'>
                                <h2>Now doing: {exercise.title}</h2>
                                <span>Remaining Sets: {setsCount}</span>
                                <span>Reps Per Set: {exercise.reps}</span>
                                {/* {
                            Array.apply(null, { length: +exercise.sets }).map((e, i) => (
                                <span className="busterCards" key={i}>
                                    ♦
                                </span>
                            ))
                        } */}
                                <br />
                                <button className='done-rep-btn' onClick={onNextRep}>Next Rep!</button>
                                {isInfo &&
                                    <p>{exercise.desc}</p>
                                }
                                <div
                                    className='imgs-container flex justify-center'
                                    style={{ display: loaded ? 'block' : 'none' }}
                                    onLoad={() => setLoaded(true)}
                                >
                                    <img src={require(`../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} alt="exercise_1" />
                                    <img src={require(`../assets/img/${exercise.type}/${exercise.title}/${exercise.img2}.png`).default} alt="exercise_2" />
                                </div>
                                {!loaded && <LoaderSpinner />}
                                <button className='light-btn light-btn-info' onClick={onToggleInfo}>{isInfo ? 'Close..' : 'More Info?'}</button>
                            </div>
                        </>
                    }
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