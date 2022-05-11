import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { onUpdate } from "../store/user.actions";
import { Redirect } from "react-router-dom";
import Select from 'react-select';
import hero from '../assets/img/hero-my-menus.jpg';
import { NutritionMenuPreview } from "../cmps/BuildMenu/NutritionMenuPreview";
import { ModalSetName } from "../cmps/ModalSetName";
import { FoodTypeAdd } from "../cmps/BuildMenu/FoodTypeAdd";
import Swal from 'sweetalert2';

function _MyMenus(props) {
    const { user, onUpdate } = props
    const [selectedOption, setSelectedOption] = useState(0);
    const [nutritionMenu, setNutritionMenu] = useState(null);
    const [modalNameOpen, setModalNameOpen] = useState(false);
    const [isAddFood, setIsAddFood] = useState(false);

    useEffect(() => {
        if (user.nutritionMenus[selectedOption.value]) setNutritionMenu(user.nutritionMenus[selectedOption.value].menu)
    }, [selectedOption]);

    if (!user) return (<Redirect to={'/'} />)

    const options = user.nutritionMenus.map((menu, idx) => {
        return { value: idx, label: menu.menuTitle }
    })

    const onAddFood = (foodName, gram, foodValues) => {
        for (const food in foodValues) {
            if (!foodValues[food]) foodValues[food] = 0
            foodValues[food] = foodValues[food] > 999 ? 999 : Math.round(+foodValues[food] * (gram / 100))
        }
        foodValues.foodName = foodName
        foodValues.gram = gram
        setNutritionMenu(nutritionMenu => [...nutritionMenu, foodValues])
    }

    const onRemoveFood = (idxToRemove) => {
        setNutritionMenu(nutritionMenu => [...(nutritionMenu.filter((food, foodIdx) => foodIdx !== idxToRemove))]);
    }

    const saveNewMenu = async (menuTitle) => {
        if (!menuTitle) return
        let menu = { menuTitle, menu: nutritionMenu }
        user.nutritionMenus = [...user.nutritionMenus, menu]
        const res = await props.onUpdate(user)
        if (res) {
            Toast.fire({
                icon: 'success',
                title: 'Menu Saved!'
            })
            setModalNameOpen(false)
            setSelectedOption(0)
        }
    }

    const onDeleteMsg = () => {
        Swal.fire({
            title: `Are you sure you want to delete ${user.nutritionMenus[selectedOption.value].menuTitle} menu?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                user.nutritionMenus.splice(selectedOption.value, 1)
                onUpdate(user)
                setSelectedOption(0)
                Swal.fire(
                    'Deleted!',
                    'Your menu has been deleted.',
                    'success'
                )
            }
        })
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return (
        <section className='my-menus margin-top' style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%' }}>
            {user.nutritionMenus.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className='my-select'
                    placeholder='Select Menu...'
                />
                :
                <p className='fs30'>You dont have menus yet..</p>
            }
            {!!selectedOption &&
                <>
                    <div className='my-menus-header'>
                        <h2>{user.nutritionMenus[selectedOption.value].menuTitle}</h2>
                    </div>
                    {nutritionMenu &&
                        <>
                            <div className='my-menus-btns'>
                                <button onClick={() => { onDeleteMsg() }} className='light-btn'>Delete Menu</button>
                                <button className='light-btn' onClick={() => { setIsAddFood(true) }}>Add food to menu</button>
                            </div>
                            {isAddFood && <FoodTypeAdd setOpenModal={setIsAddFood} onAddFood={onAddFood} />}
                            <NutritionMenuPreview nutritionMenu={nutritionMenu} onRemoveFood={onRemoveFood} />
                            <button className='primary-btn' onClick={() => { setModalNameOpen(true) }}>Save Nutrition menu</button>
                            {modalNameOpen && <ModalSetName setOpenModal={setModalNameOpen} msg={'Menu'} onAction={saveNewMenu} />}
                        </>
                    }
                </>
            }
        </section >
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

export const MyMenus = connect(mapStateToProps, mapDispatchToProps)(_MyMenus);