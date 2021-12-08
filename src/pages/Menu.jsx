import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { LoaderSpinner } from "../cmps/LoaderSpinner";
import { PageList } from "../cmps/PageList";
import { LoaderSpinner } from '../cmps/LoaderSpinner'

export class Menu extends Component {

  state = {
    pages: null,
  }

  componentDidMount = () => {
    const pages = [{ title: 'My Workouts', linkTo: 'trainingMine' },
    { title: 'My diet menus', linkTo: 'nutritionMine' },
    { title: 'Building a training program', linkTo: 'BuildWorkout' },
    { title: 'Building a nutrition menu', linkTo: 'buildNutrition' },
    { title: 'Weight tracking', linkTo: 'weight' },
    { title: 'More information and articles', linkTo: 'info' }]
    this.setState(prevState => ({ ...prevState, pages }))
  }

  render() {
    const { pages } = this.state
    if (!pages || !pages.length) return <LoaderSpinner />

    return (
      <>
        <div className="flex column align-center margin-top menu">
          {pages.length ? (
            <PageList
              pages={pages}
            />
          ) : (
            <LoaderSpinner />
          )}
        </div>
      </>
    );
  }
}