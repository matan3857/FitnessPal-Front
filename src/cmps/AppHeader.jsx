import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from '../assets/img/logo.jpg';

function _AppHeader({ user }) {

  console.log('user', user._id)

  return (
    <>
      <header className={`main-header flex align-center ${!user._id ? 'justify-center' : ''} `}>

        {user._id && <div className="header-btn-container flex">
          <div className="header-btn pointer">
            <span className="home">Menu</span>
          </div>
        </div>}


        <Link to="/menu">
          <div className="logo flex justify-center">
            <img src={logo} className="logo logo-icon" />
            <h1>Fitness Pal</h1>
          </div>
        </Link>

        {user._id && <div className="pointer">Logout</div>}

      </header>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userModule.user,
  };
}
const mapDispatchToProps = {
}

export const AppHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(_AppHeader));
