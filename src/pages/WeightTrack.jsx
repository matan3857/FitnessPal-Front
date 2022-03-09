import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { onUpdate } from "../store/user.actions";
import { Line } from "react-chartjs-2";

// import { Line } from 'react-chartjs-2';
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

// const BarChart = () => { ... your code ... }
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

    console.log('user from', user)

    const onSubmit = async (ev) => {
        ev.preventDefault();
        // console.log('update',weight, Date.now())
        const weightToday = { weight, date: Date.now() }
        console.log('update weightToday', weightToday)
        user.weight.push(weightToday)
        props.onUpdate(user)

        // if (username.trim() && password.trim()) {
        //     let res
        //     if (!isLogin) {
        //         res = props.onSignup({ username, password, fullname });
        //     } else {
        //         res = await props.onLogin({ username, password });
        //     }
        //     if (res) props.history.push("/menu");
        // }
    };
    const userWeights = user.weight.map(currWeight => currWeight.weight)
    const userWeightDates = user.weight.map(currWeight => {
        const currDate = new Date(currWeight.date);
        const yyyy = currDate.getFullYear();
        let mm = currDate.getMonth() + 1; // Months start at 0!
        let dd = currDate.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const today = `${dd}/${mm}/${yyyy}`;
        return today
    })
    console.log('userWeights', userWeights)
    console.log('userWeightDates', userWeightDates)


    const data = {
        labels: userWeightDates,
        datasets: [
            {
                label: "Weight Track",
                data: userWeights,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
                // borderColor: "#e15640"
            },
            // {
            //     label: "Second dataset",
            //     data: [33, 25, 35, 51, 54],
            //     fill: false,
            //     borderColor: "#742774"
            // }
        ]
    };

    return (
        <div className="weight-track flex column align-center margin-top menu">
            <h1>Hello {user.fullname}, Welcome to your Weight Tracking!</h1>
            <form className="flex justify-center" onSubmit={onSubmit}>
                <input
                    className='styled-input'
                    type="number"
                    value={weight}
                    onChange={(ev) => setWeight(ev.target.value)}
                    placeholder="Enter Current Weight"
                />
                <button className="styled-btn-basic">Update Weight</button>
            </form>

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




// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }



// import React from "react";
// import { Line } from "react-chartjs-2";

// export const ActivityChart = (props) => {
//   const data = {
//     labels: [...props.taskDetails.sortedNames],
//     datasets: [
//       {
//         label: "Activities",
//         data: [...props.taskDetails.sortedAmount],
//         backgroundColor: ["#c277e0", "#61bd4f", "#ff9e1a", "#334563"],
//         borderColor: ["#c277e0", "darkgreen", "#ff9e1a", "#334563"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options1 = {
//     indexAxis: "x",
//     elements: {
//       bar: {
//         borderWidth: 2,
//       },
//     },
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "Member activity",
//         color: "rgba(255, 255, 255, 0.897)",
//         font: {
//           size: "30",
//           family: "Segoe UI",
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "rgba(255, 255, 255, 0.897)",

//           font: {
//             family: "Segoe UI",
//             size: 15,
//           },
//         },
//       },
//       y: {
//         ticks: {
//           color: "rgba(255, 255, 255, 0.897)",
//           title: 'Activity',
//           font: {
//             family: "Segoe UI",
//             size: 15,
//           },
//         },
//       },
//     },
//     grid: {
//       color: "rgba(255, 255, 255, 0.897)",
//     },
//   };

//   return (
//     <div className="chart-activity">
//       <Line data={data} options={options1} height={280} />
//     </div>
//   );
// };
