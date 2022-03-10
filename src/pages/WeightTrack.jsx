import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { onUpdate } from "../store/user.actions";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function _WeightTrack(props) {
    const { user } = props
    const [weight, setWeight] = useState('');

    const onSubmit = async (ev) => {
        ev.preventDefault();
        const weightToday = { weight, date: Date.now() }
        user.weight.push(weightToday)
        if (user.weight.length > 12) user.weight.splice(0, 1) // Max 12 Weeks to chart
        setWeight('')
        props.onUpdate(user)
    };

    const onDeleteLastWeight = () => {
        if (!user.weight.length) return
        user.weight.pop()
        props.onUpdate(user)
    }

    const userWeights = user.weight.map(currWeight => currWeight.weight)
    const userWeightDates = user.weight.map(currWeight => {
        const currDate = new Date(currWeight.date)
        const yyyy = currDate.getFullYear()
        let mm = currDate.getMonth() + 1 // Months start at 0
        let dd = currDate.getDate()
        if (dd < 10) dd = `0${dd}`
        if (mm < 10) mm = `0${mm}`
        const today = `${dd}/${mm}/${yyyy}`
        return today
    })

    const data = {
        labels: userWeightDates,
        datasets: [
            {
                label: "Weight Track",
                data: userWeights,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 3
            }
        ]
    };

    return (
        <div className="weight-track flex column align-center margin-top menu">
            <h1>Hello {user.fullname},<br /> Welcome to your Weight Tracking</h1>
            <form className="flex justify-center" onSubmit={onSubmit}>
                <input
                    className='styled-input'
                    type="number"
                    value={weight}
                    onChange={(ev) => setWeight(ev.target.value)}
                    placeholder="Enter Your Current Weight"
                />
                <button className="styled-btn-basic">Update Weight</button>
            </form>
            <button className="danger-btn" onClick={onDeleteLastWeight}>Delete Last Weight</button>

            <div className='chart-container'>
                <Line data={data} />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser
    };
}

const mapDispatchToProps = {
    onUpdate
}

export const WeightTrack = connect(mapStateToProps, mapDispatchToProps)(_WeightTrack);