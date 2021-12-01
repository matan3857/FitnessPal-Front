import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { WorkoutTypes } from '../cmps/WorkoutTypes';

export class _BuildWorkout extends Component {
    state = {
    }

    render() {
        console.log('exercise:', this.props.exercises)
        return (
            <>
                <section className="workout-types-container">
                <WorkoutTypes/>
                </section>
                {/* <article className="page-preview">
                    <Link to={`/BuildWorkout/chest`}>
                        <div
                            className="page-content"
                            style={{ background: 'thistle' }}
                        // style={{
                        //   background: board.style.bgImg
                        //     ? `url(${board.style.bgImg})`
                        //     : board.style.bgClr,
                        // }}
                        ></div>
                        <p className="page-title">Chest</p>
                    </Link>
                </article> */}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseModule.exercises,
    };
}

export const BuildWorkout = connect(mapStateToProps)(_BuildWorkout);