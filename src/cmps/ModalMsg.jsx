import React from "react";

export function ModalMsg({ setOpenModal, msg, onAction }) {

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button className="close-btn" onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="modal-title">
                    <h1>{msg}</h1>
                </div>
                <div className="modal-footer">
                    <button onClick={() => { setOpenModal(false) }} className=" modal-btns cancel-btn">Cancel</button>
                    <button onClick={() => { onAction() }} className=" modal-btns continue-btn">OK</button>
                </div>
            </div>
        </div>
    );
}