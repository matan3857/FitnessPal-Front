import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "../cmps/Info/Slider";
import Data from '../cmps/Info/Data';

function _Info(props) {
    const { user } = props

    if (!user) return (<Redirect to={'/'} />)

    return (
        <div className="info-container margin-top">
            <h1>Welcome to Building workout guide</h1>
            <Slider />
            <Data />
            <Link to="/buildWorkout"><button className="primary-btn">Lets build your workout!</button></Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

export const Info = connect(mapStateToProps, null)(_Info);