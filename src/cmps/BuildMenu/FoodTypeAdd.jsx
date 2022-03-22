import React, { useState } from "react";

export function FoodTypeAdd({ onAddFood, setOpenModal }) {

    const [gram, setGram] = useState('');
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carb, setCarb] = useState('');
    const [fat, setFat] = useState('');
    const [sodium, setSodium] = useState('');
    const [fiber, setFiber] = useState('');

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button className="close-btn" onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="modal-title">
                    <h1>Enter food values per 100 gram</h1>
                </div>
                <div className="modal-body">
                    <form className="flex column" onSubmit={() => { onAddFood(foodName, gram) }}>
                        <label>
                            <span>
                                Food Name
                            </span>
                            <input
                                type="text"
                                value={foodName}
                                onChange={(ev) => setFoodName(ev.target.value)}
                                placeholder="Enter food name.."
                                required
                            />
                        </label>
                        <label>
                            <span>
                                Calories
                            </span>
                            <input
                                type="number"
                                value={calories}
                                onChange={(ev) => setCalories(ev.target.value)}
                                placeholder="Insert calories.."
                                required
                            />
                        </label>
                        <label>
                            <span>
                                Protein
                            </span>
                            <input
                                type="number"
                                value={protein}
                                onChange={(ev) => setProtein(ev.target.value)}
                                placeholder="Insert amount of protein.."
                                required
                            />
                        </label>
                        <label>
                            <span>
                                Carb
                            </span>
                            <input
                                type="number"
                                value={carb}
                                onChange={(ev) => setCarb(ev.target.value)}
                                placeholder="Insert amount of carbs.."
                                required
                            />
                        </label>
                        <label>
                            <span>
                                Fat
                            </span>
                            <input
                                type="number"
                                value={fat}
                                onChange={(ev) => setFat(ev.target.value)}
                                placeholder="Insert amount of fat.."
                                required
                            />
                        </label>
                        <label>
                            <span>
                                Sodium
                            </span>
                            <input
                                type="number"
                                value={sodium}
                                onChange={(ev) => setSodium(ev.target.value)}
                                placeholder="Insert amount of sodium.."
                            />
                        </label>
                        <label>
                            <span>
                                Fiber
                            </span>
                            <input
                                type="number"
                                value={fiber}
                                onChange={(ev) => setFiber(ev.target.value)}
                                placeholder="Insert amount of fiber.."
                            />
                        </label>
                        <div className="modal-title">
                            <h1>Enter your quantity of consumption</h1>
                        </div>
                        <label>
                            <span>
                                Amount (gram)
                            </span>
                            <input
                                type="number"
                                value={gram}
                                onChange={(ev) => setGram(ev.target.value)}
                                placeholder="Insert amount of food weight(gram).."
                                required
                            />
                        </label>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={() => { onAddFood(foodName, gram, { calories, protein, carb, fat, sodium, fiber }); setOpenModal(false); }} className=" modal-btns continue-btn">ADD</button>
                </div>
            </div>
        </div>
    );
}