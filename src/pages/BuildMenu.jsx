import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { onUpdate } from "../store/user.actions";
import { FoodTypeAdd } from "../cmps/BuildMenu/FoodTypeAdd";


function _BuildMenu(props) {
    const [isAddFood, setIsAddFood] = useState(false);
    const { user } = props

    if (!user) return (<Redirect to={'/'} />)


    const onAddFood = (foodValues, gram) => {
        console.log('add', foodValues, gram)
    }


    return (
        <section className="build-menu-container margin-top">
            <h1>Build menu</h1>
            <button onClick={() => { setIsAddFood(true) }}>Add food to menu</button>
            {isAddFood && <FoodTypeAdd setOpenModal={setIsAddFood} onAddFood={onAddFood} />}


        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

const mapDispatchToProps = {
    onUpdate,
}

export const BuildMenu = connect(mapStateToProps, mapDispatchToProps)(_BuildMenu);