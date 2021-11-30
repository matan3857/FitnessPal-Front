import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import chest from '../assets/img/Chest.png';

export class _WorkoutTypePreview extends Component {
    state = {
    }
    
    render() {
        const { exerciseType } = this.props
        console.log('exerciseType:', exerciseType)

        if (!exerciseType) return <div>Loading...</div>

        return (
            <div className="exercise-type">
                <img src={require(`../assets/img/${exerciseType}.png`).default} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

export const WorkoutTypePreview = connect(mapStateToProps)(_WorkoutTypePreview);