import React, { useState } from "react";

export function Modal({ setOpenModal, onAddWorkout }) {

    const [workoutTitle, setWorkoutTitle] = useState('');

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button className="close-btn" onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="modal-title">
                    <h1>Name of Workout</h1>
                </div>
                <div className="modal-body">
                    <form className="flex column" onSubmit={onAddWorkout}>
                        <input
                            type="txt"
                            value={workoutTitle}
                            onChange={(ev) => setWorkoutTitle(ev.target.value)}
                            placeholder="Enter Workout Name.."
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={() => { setOpenModal(false) }} className=" modal-btns cancel-btn">Cancel</button>
                    <button onClick={() => { console.log('Hello') }} className=" modal-btns continue-btn">OK</button>
                </div>
            </div>
        </div>
    );
}