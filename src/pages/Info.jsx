import React from 'react';
import { Link } from "react-router-dom";
import Slider from "../cmps/Info/Slider";
import Data from '../cmps/Info/Data';

export function Info(props) {
    return (
        <div className="info-container margin-top">
            <h1>Welcome to Building workout guide</h1>
            <Slider />
            <Data />
            <Link to="/buildWorkout"><button className="primary-btn">Lets build your workout!</button></Link>
        </div>
    )
}