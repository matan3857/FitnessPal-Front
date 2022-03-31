import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { onLogout } from "../store/user.actions";
import logo from '../assets/img/logo.jpg';
import logout from '../assets/img/logout.png';

function _AppHeader({ user, onLogout, history }) {
  const [isShowTitle, setIsShowTitle] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", function () {
      window.innerWidth > 500 ? setIsShowTitle(true) : setIsShowTitle(false)
    });
  }, []);

  return (
    <>
      <header className={`main-header flex align-center ${!user || !user._id ? 'justify-center' : ''} `}>
        {user && user._id && <div className="header-btn-container flex">
          <Link to="/menu">
            <div className="header-btn pointer">
              <span className="home">Menu</span>
            </div>
          </Link>
        </div>}

        <Link to="/menu">
          <div className="logo flex justify-center">
            <img src={logo} className="logo logo-icon" alt="logo" />
            {isShowTitle && <h1>Fitness Pal</h1>}
          </div>
        </Link>

        {user && user._id && <div onClick={() => { onLogout(); history.push("/"); }} className="logout-container pointer flex align-center">
          <p className="logout">
            Logout
          </p>
          <img src={logout} className="logout-icon" alt="logout" />
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
