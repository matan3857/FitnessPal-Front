import React, { useState } from 'react'
import { FoodPreview } from "./FoodPreview";

export function NutritionMenuPreview(props) {
    const { nutritionMenu, sumInfo, onRemoveFood } = props;

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
