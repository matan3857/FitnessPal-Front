import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { PageList } from "../cmps/PageList";
import { LoaderSpinner } from '../cmps/LoaderSpinner'
import { Redirect } from 'react-router-dom';

export function _Menu(props) {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const pages = [{ title: 'My workouts', linkTo: 'myWorkouts' },
    { title: 'My diet menus', linkTo: 'myMenus' },
    { title: 'Building a training program', linkTo: 'buildWorkout' },
    { title: 'Building a nutrition menu', linkTo: 'buildMenu' },
    { title: 'Weight tracking', linkTo: 'weight' },
    { title: 'How to build workout plan?', linkTo: 'info' }]
    setPages(pages)
  }, []);

  if (!pages || !pages.length) return <LoaderSpinner />
  if (!props.user) return (<Redirect to={'/'} />)
  
  return (
    <>
      <div className="flex column align-center margin-top menu background-style">
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

function mapStateToProps(state) {
  return {
    user: state.userModule.loggedinUser,
  };
}

export const Menu = connect(mapStateToProps, null)(_Menu);