import React, { useState } from "react";

export function ModalSetRep({ setOpenModal, addExWithSetsReps }) {

    const [sets, setExerciseSets] = useState('');
    const [reps, setExerciseReps] = useState('');

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button className="close-btn" onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="modal-title">
                    <h1>Set number of sets and reps</h1>
                </div>
                <div className="modal-body">
                    <form className="flex column" onSubmit={() => { addExWithSetsReps(sets , reps) }}>
                        <input
                            type="number"
                            value={sets}
                            onChange={(ev) => setExerciseSets(ev.target.value)}
                            placeholder="Enter number of sets.."
                            autoFocus
                            required
                        />
                         <input
                            type="number"
                            value={reps}
                            onChange={(ev) => setExerciseReps(ev.target.value)}
                            placeholder="Enter Enter number of reps.."
                            required
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={() => { setOpenModal(false) }} className=" modal-btns cancel-btn">Cancel</button>
                    <button onClick={() => { addExWithSetsReps(sets , reps); setOpenModal(false); }} className=" modal-btns continue-btn">OK</button>
                </div>
            </div>
        </div>
    );
}