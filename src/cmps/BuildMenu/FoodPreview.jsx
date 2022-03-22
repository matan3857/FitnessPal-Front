import React from 'react';

export function FoodPreview(props) {
    const { foodDetails } = props

    return (
        <>
            <p>{foodDetails.foodName}</p>
            <p>{foodDetails.gram}g</p>
            <p>{foodDetails.calories}</p>
            <p>{foodDetails.protein}</p>
            <p>{foodDetails.carb}</p>
            <p>{foodDetails.fat}</p>
            <p>{foodDetails.sodium}</p>
            <p>{foodDetails.fiber}</p>

            <div>
                <button className='food-menu-btn'>Remove</button>
            </div>
        </>
    )
}
