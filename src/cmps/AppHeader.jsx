import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from '../assets/img/logo.jpg';

function _AppHeader(props) {
 
  return (
    <>
    <header
      className='main-header flex align-center'
    >
      <div className="header-btn-container flex">
        <Link to="/" className="header-btn">
          {/* <HomeOutlinedIcon /> */}
        </Link>
        
      </div>
      {/* <div className="logo flex justify-center">
          <img src={logo} className="logo logo-icon" />
          <h1>Fitness Pal</h1>
        </div> */}
      <div>Hamburger</div>
     
       
    </header>
  </>
  );
}

function mapStateToProps(state) {
  return {
  };
}
const mapDispatchToProps = {
}

export const AppHeader = withRouter(connect(mapStateToProps,mapDispatchToProps)(_AppHeader));
