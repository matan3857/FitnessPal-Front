import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
// import { LoaderSpinner } from '../cmps/LoaderSpinner'

function _WeightTrack(props) {
    //   const [pages, setPages] = useState(null);
    console.log('user from', user)
    //   if (!pages || !pages.length) return <LoaderSpinner />
    return (
        <div className="flex column align-center margin-top menu">
            
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser
    };
}

export const WeightTrack = connect(mapStateToProps, null)(_WeightTrack);
