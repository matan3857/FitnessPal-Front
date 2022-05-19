import React, { useState } from "react";

export function ModalSetName({ setOpenModal, onAction, msg }) {
    const [title, setTitle] = useState('');

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button className="close-btn" onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="modal-title">
                    <h1>Name of {msg}</h1>
                </div>
                <div className="modal-body">
                    <form className="flex column" onSubmit={() => { onAction(title) }}>
                        <input
                            type="txt"
                            value={title}
                            onChange={(ev) => setTitle(ev.target.value)}
                            placeholder={`Enter ${msg} Name..`}
                            autoFocus
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={() => { setOpenModal(false) }} className=" modal-btns cancel-btn">Cancel</button>
                    <button onClick={() => { onAction(title) }} className=" modal-btns continue-btn">OK</button>
                </div>
            </div>
        </div>
    );
}