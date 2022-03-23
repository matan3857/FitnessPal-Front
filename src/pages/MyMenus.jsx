import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { ModalMsg } from "../cmps/ModalMsg";
import { onUpdate } from "../store/user.actions";
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';
import hero from '../assets/img/hero-my-workouts.png';
import { NutritionMenuPreview } from "../cmps/BuildMenu/NutritionMenuPreview";
import { ModalSetName } from "../cmps/ModalSetName";


function _MyMenus(props) {
    const { user, onUpdate } = props
    const [selectedOption, setSelectedOption] = useState(0);
    const [modalRemove, setModalRemove] = useState(false);
    const [nutritionMenu, setNutritionMenu] = useState(null);
    const [modalNameOpen, setModalNameOpen] = useState(false);

    useEffect(() => {
        if (user.nutritionMenus[selectedOption.value]) setNutritionMenu(user.nutritionMenus[selectedOption.value].menu)
    }, [selectedOption]);

    console.log('nutritionMenu', nutritionMenu)

    if (!user) return (<Redirect to={'/'} />)

    const options = user.nutritionMenus.map((menu, idx) => {
        return { value: idx, label: menu.menuTitle }
    })

    const onDeleteMenu = () => {
        user.nutritionMenus.splice(selectedOption.value, 1)
        onUpdate(user)
        setModalRemove(false)
    }
    console.log(user)

    const onRemoveFood = (idxToRemove) => {
        setNutritionMenu(nutritionMenu => [...(nutritionMenu.filter((food, foodIdx) => foodIdx !== idxToRemove))]);
    }

    const saveNewMenu = async (menuTitle) => {
        if (!menuTitle) return
        let menu = { menuTitle, menu: nutritionMenu }
        user.nutritionMenus = [...user.nutritionMenus, menu]
        const res = await props.onUpdate(user)
        if (res) {
            setModalNameOpen(false)
            setSelectedOption(0)
        }
    }

    return (
        <section className='my-menus margin-top' style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%' }}>
            <h1>My Menus</h1>
            {user.nutritionMenus.length ?
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className='my-select'
                />
                :
                <p>You dont have menus yet..</p>
            }
            {!!selectedOption &&
                <>
                    <div className='my-menus-header'>
                        <h1>{user.nutritionMenus[selectedOption.value].menuTitle}</h1>
                        <div className='my-menus-btns'>
                            <button onClick={() => { setModalRemove(true) }} className='light-btn'>Delete Menu</button>
                        </div>
                    </div>
                    {nutritionMenu &&
                        <>
                            <NutritionMenuPreview nutritionMenu={nutritionMenu} onRemoveFood={onRemoveFood} />
                            <button className='primary-btn' onClick={() => { setModalNameOpen(true) }}>Save Nutrition menu</button>
                            {modalNameOpen && <ModalSetName setOpenModal={setModalNameOpen} msg={'Menu'} onAction={saveNewMenu} />}
                        </>

                    }
                </>
            }
            {modalRemove && <ModalMsg setOpenModal={setModalRemove} msg={'Are you sure you want to delete this menu?'} onAction={onDeleteMenu} />}
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