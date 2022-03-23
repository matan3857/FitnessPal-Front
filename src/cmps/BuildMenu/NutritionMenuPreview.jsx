import React, { useState, useEffect } from 'react'
import { FoodPreview } from "./FoodPreview";

export function NutritionMenuPreview(props) {
    const { nutritionMenu, onRemoveFood } = props;
    const [sumInfo, setSumInfo] = useState({ sumCalories: 0, sumProtein: 0, sumCarb: 0, sumFat: 0, sumSodium: 0, sumFiber: 0 })

    useEffect(() => {
        calcInfo()
    }, [nutritionMenu]);

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

    return (
        <div className="food-menu-container">
            <h1>Food Name</h1>
            <h1>Amount</h1>
            <h1>Calories</h1>
            <h1>Protein</h1>
            <h1>Carb</h1>
            <h1>Fat</h1>
            <h1>Sodium</h1>
            <h1>Fiber</h1>
            <p></p>

            {nutritionMenu.map((foodDetails, idx) => (
                <FoodPreview
                    key={idx}
                    idx={idx}
                    foodDetails={foodDetails}
                    onRemoveFood={onRemoveFood}
                />
            ))}
            <h1>Total</h1>
            <p></p>
            <h1>{sumInfo.sumCalories}</h1>
            <h1>{sumInfo.sumProtein}</h1>
            <h1>{sumInfo.sumCarb}</h1>
            <h1>{sumInfo.sumFat}</h1>
            <h1>{sumInfo.sumSodium}</h1>
            <h1>{sumInfo.sumFiber}</h1>
        </div>
    );
}
