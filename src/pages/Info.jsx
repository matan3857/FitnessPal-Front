import React from 'react';
import { Link } from "react-router-dom";

export function Info(props) {

    return (
        <div className="info-container margin-top">
            <Link to="/buildWorkout"><button className="light-btn">Lets build your workout!</button></Link>
            <h1>Welcome to Building workout guide</h1>
           
        </div>
    )
}
