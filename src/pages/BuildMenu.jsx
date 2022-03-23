import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { onUpdate } from "../store/user.actions";
import { FoodTypeAdd } from "../cmps/BuildMenu/FoodTypeAdd";
import { NutritionMenuPreview } from "../cmps/BuildMenu/NutritionMenuPreview";
import { ModalSetName } from "../cmps/ModalSetName";

function _BuildMenu(props) {
    const [isAddFood, setIsAddFood] = useState(false);
    const [nutritionMenu, setNutritionMenu] = useState([]);
    const [sumInfo, setSumInfo] = useState({ sumCalories: 0, sumProtein: 0, sumCarb: 0, sumFat: 0, sumSodium: 0, sumFiber: 0 })
    const [modalNameOpen, setModalNameOpen] = useState(false);

    useEffect(() => {
        calcInfo()
    }, [nutritionMenu]);

    const { user } = props

    if (!user) return (<Redirect to={'/'} />)

    const onAddFood = (foodName, gram, foodValues) => {
        for (const food in foodValues) {
            if (!foodValues[food]) foodValues[food] = 0
            foodValues[food] = foodValues[food] > 999 ? 999 : Math.round(+foodValues[food] * (gram / 100))
        }
        foodValues.foodName = foodName
        foodValues.gram = gram
        setNutritionMenu(nutritionMenu => [...nutritionMenu, foodValues]);
    }

    const onRemoveFood = (idxToRemove) => {
        setNutritionMenu(nutritionMenu => [...(nutritionMenu.filter((food, foodIdx) => foodIdx !== idxToRemove))]);
    }

    const calcInfo = () => {
        let [sumCalories, sumProtein, sumCarb, sumFat, sumSodium, sumFiber] = [0, 0, 0, 0, 0, 0]
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

    const saveNewMenu = async (menuTitle) => {
        if (!menuTitle) return
        let menu = { menuTitle, menu: nutritionMenu }
        user.nutritionMenus = [...user.nutritionMenus, menu]
        const res = await props.onUpdate(user)
        if (res) props.history.push("/menu")
    }

    return (
        <section className="build-menu-container margin-top">
            <h1 className='header-title'>Hello {user.fullname}, Welcome To Build Menu Page</h1>
            <button className='light-btn' onClick={() => { setIsAddFood(true) }}>Add food to menu</button>
            {isAddFood && <FoodTypeAdd setOpenModal={setIsAddFood} onAddFood={onAddFood} />}
            <NutritionMenuPreview nutritionMenu={nutritionMenu} sumInfo={sumInfo} onRemoveFood={onRemoveFood} />
            <button className='primary-btn' onClick={() => { setModalNameOpen(true) }}>Save Nutrition menu</button>
            {modalNameOpen && <ModalSetName setOpenModal={setModalNameOpen} msg={'Menu'} onAction={saveNewMenu} />}
        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

const mapDispatchToProps = {
    onUpdate
}

export const BuildMenu = connect(mapStateToProps, mapDispatchToProps)(_BuildMenu);