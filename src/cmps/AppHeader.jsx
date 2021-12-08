import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from '../assets/img/logo.jpg';
import logout from '../assets/img/logout.png';

import { onLogout } from "../store/user.actions";


function _AppHeader({ user, onLogout, history }) {


  return (
    <>
      <header className={`main-header flex align-center ${!user || !user._id ? 'justify-center' : ''} `}>

        {user && user._id && <div className="header-btn-container flex">
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

        {user && user._id && <div onClick={() => { onLogout(); history.push("/"); }} className="logout-container pointer flex align-center">
          <p className="logout">
            Logout
          </p>
          <img src={logout} className="logout-icon" />
        </div>}

      </header>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userModule.loggedinUser,
  };
}
const mapDispatchToProps = {
  onLogout
}

export const AppHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(_AppHeader));
