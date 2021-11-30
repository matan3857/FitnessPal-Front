import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function WorkoutTypePreview(props) {

    const { exerciseType } = props
    return (
        <div className="exercise-type">
            <img src={require(`../assets/img/${exerciseType}.png`).default} />
        </div>
    )
}