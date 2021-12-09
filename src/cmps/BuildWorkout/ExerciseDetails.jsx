import React, { useState, useEffect } from 'react';

export function ExerciseDetails({ exercise, onAddExerciseToWorkout }) {

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

    console.log('curr exercise:', exercise)
    return (
        <div className='exercise-details flex column align-center'>
            <h1>{exercise.title}</h1>
            <p>{exercise.desc}</p>
            <div className='imgs-container flex'>
                <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img1}.png`).default} />
                <img src={require(`../../assets/img/${exercise.type}/${exercise.title}/${exercise.img2}.png`).default} />
            </div>
            <div className='exercise-btns flex column'>
                <button className='add-exercise-btn' onClick={() => { onAddExerciseToWorkout(exercise) }}>Add to Workout list</button>
                {/* {user.isAdmin && <button className='exercise-btn'>Edit</button>} */}
            </div>
        </div>
    );
}