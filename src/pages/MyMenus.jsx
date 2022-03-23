import React, { useState } from 'react';
import { connect } from "react-redux";
// import { ExerciseDetails } from '../cmps/BuildWorkout/ExerciseDetails'
import { ModalMsg } from "../cmps/ModalMsg";
import { onUpdate } from "../store/user.actions";
// import { MyWorkoutPreview } from "../cmps/MyWorkouts/MyWorkoutPreview";
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';
import hero from '../assets/img/hero-my-workouts.png';

function _MyMenus(props) {
    const { user, onUpdate } = props
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalRemove, setModalRemove] = useState(false);
    // const [isExerciseDetails, setIsExerciseDetails] = useState(false);
    const [currMenu, setCurrMenu] = useState(null);

    if (!user) return (<Redirect to={'/'} />)

    const options = user.nutritionMenus.map((menu, idx) => {
        return { value: idx, label: menu.menuTitle }
    })

    const onDeleteMenu = () => {
        user.nutritionMenus.splice(selectedOption.value, 1)
        onUpdate(user)
        setModalRemove(false)
        props.history.push("/menu")
    }

    // const onShowExerciseDetails = (exercise) => {
    //     setCurrExercise(exercise)
    //     setIsExerciseDetails(true)
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }

    // const onHideDetails = () => {
    //     setIsExerciseDetails(false)
    //     setCurrExercise(null)
    // }

    return (
        <section className='my-workouts margin-top' style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%' }}>
            <h1>My Menus</h1>
            {user.nutritionMenus.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className='my-workouts-select'
                />
                :
                <p>You dont have menus yet..</p>
            }
            {selectedOption &&
                <>
                    {/* {isExerciseDetails && <ExerciseDetails exercise={currExercise} onAddExerciseToWorkout={null} onBackToAll={null} onHideDetails={onHideDetails} isEditWorkout={false} />} */}
                    <div className='my-workout-header'>
                        <>
                            <h1>{user.nutritionMenus[selectedOption.value].menuTitle}</h1>
                            <div className='my-workout-btns'>
                                {/* <Link to={{ pathname: '/buildWorkout', workoutToEdit: user.workouts[selectedOption.value].ex }} >
                                    <button className='light-btn'>Edit Workout</button>
                                </Link> */}
                                <button onClick={() => { setModalRemove(true) }} className='light-btn'>Delete Menu</button>
                            </div>
                            {/* <Link to={{
                                pathname: `/startWorkout/${selectedOption.value}`,
                                workoutToDo: user.workouts[selectedOption.value]
                            }}>
                                <button className='primary-btn'>Start Workout</button>
                            </Link> */}
                        </>
                    </div>
                    <div className='exercise-list'>
                        <h2>Here Show Menu</h2>
                        {/* {
                            user.nutritionMenus[selectedOption.value].ex.map((exercise, idx) => (
                                <MyWorkoutPreview
                                    exercise={exercise}
                                    key={idx}
                                    onShowExerciseDetails={onShowExerciseDetails}
                                />
                            ))} */}
                    </div>
                </>
            }
            {modalRemove && <ModalMsg setOpenModal={setModalRemove} msg={'Are you sure you want to delete this menu?'} onAction={onDeleteMenu} />}
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

export const MyMenus = connect(mapStateToProps, mapDispatchToProps)(_MyMenus);