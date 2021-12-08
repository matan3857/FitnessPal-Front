import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export  function LoaderSpinner() {
    return (
        <Loader
        type="TailSpin"
        color="#302f2f"
        // color="#00BFFF"
        height={90}
        width={90}
        // timeout={3000} 
      />
    )
}
