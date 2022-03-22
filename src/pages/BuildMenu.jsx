import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { onUpdate } from "../store/user.actions";
import { FoodTypeAdd } from "../cmps/BuildMenu/FoodTypeAdd";
import { NutritionMenuPreview } from "../cmps/BuildMenu/NutritionMenuPreview";


function _BuildMenu(props) {
    const [isAddFood, setIsAddFood] = useState(false);
    const [nutritionMenu, setNutritionMenu] = useState([]);
    const [sumInfo, setSumInfo] = useState({ sumCalories: 0, sumProtein: 0, sumCarb: 0, sumFat: 0, sumSodium: 0, sumFiber: 0 })

    useEffect(() => {
        calcInfo()
    }, [nutritionMenu]);

    const { user } = props
    console.log('user', user)

    if (!user) return (<Redirect to={'/'} />)


    const onAddFood = (foodName, gram, foodValues) => {
        for (const food in foodValues) {
            foodValues[food] = foodValues[food] > 999 ? 999 : Math.round(+foodValues[food] * (gram / 100))
        }
        foodValues.foodName = foodName
        setNutritionMenu(nutritionMenu => [...nutritionMenu, foodValues]);
    }

    const calcInfo = () => {
        let sumCalories = 0
        let sumProtein = 0
        let sumCarb = 0
        let sumFat = 0
        let sumSodium = 0
        let sumFiber = 0
        for (let i = 0; i < nutritionMenu.length; i++) {
            sumCalories += +(nutritionMenu[i].calories)
            sumProtein += +(nutritionMenu[i].protein)
            sumCarb += +(nutritionMenu[i].carb)
            sumFat += +(nutritionMenu[i].fat)
            sumSodium += +(nutritionMenu[i].sodium)
            sumFiber += +(nutritionMenu[i].fiber)
        }
        setSumInfo(prevSumInfo => ({ ...prevSumInfo, sumCalories, sumProtein, sumCarb, sumFat, sumSodium, sumFiber }))
    }

    console.log('nutritionMenu', nutritionMenu)

    return (
        <section className="build-menu-container margin-top">
            <h1>Build menu</h1>
            <button className='light-btn' onClick={() => { setIsAddFood(true) }}>Add food to menu</button>
            {isAddFood && <FoodTypeAdd setOpenModal={setIsAddFood} onAddFood={onAddFood} />}

            <NutritionMenuPreview nutritionMenu={nutritionMenu} sumInfo={sumInfo} />

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