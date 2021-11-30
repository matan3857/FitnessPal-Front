import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { LoaderSpinner } from "../cmps/LoaderSpinner";
import { PageList } from "../cmps/PageList";
import logo from '../assets/img/logo.jpg';

export class Menu extends Component {

  state = {
    pages: null
  }

  componentDidMount = () => {
    const pages = [{ title: 'התוכניות שלי', linkTo: 'trainingMine' },
    { title: 'התפריטים שלי', linkTo: 'nutritionMine' },
    { title: 'בניית תוכנית אימונים', linkTo: 'BuildWorkout' },
    { title: 'בניית תפריט תזונה', linkTo: 'buildNutrition' },
    { title: 'מעקב משקל', linkTo: 'weight' },
    { title: 'מידע ומאמרים', linkTo: 'info' }]
    this.setState(prevState => ({ ...prevState, pages }))
  }

  render() {
    const { pages } = this.state
    if (!pages || !pages.length) return <div>Loading...</div>

    return (
      <>
        <div className="logo flex justify-center">
          <img src={logo} className="logo logo-icon" />
          <h1>Fitness Pal</h1>
        </div>
        <div className="flex column align-center">
          {pages.length ? (
            <PageList
              pages={pages}
            />
          ) : (
            // <LoaderSpinner />
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  }
}